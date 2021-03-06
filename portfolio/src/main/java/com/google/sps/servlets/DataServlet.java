// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.sps.data.Comment;
import java.io.IOException;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/comments")
public class DataServlet extends HttpServlet {


  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    String stats, url;


    UserService userService = UserServiceFactory.getUserService();
    if (userService.isUserLoggedIn())
    {
        stats = "True";
        String urlToRedirectToAfterUserLogsOut = "/";
        url = userService.createLogoutURL(urlToRedirectToAfterUserLogsOut);
    }
    else
    {
        stats = "False";
        String urlToRedirectToAfterUserLogsIn = "/";
        
        url = userService.createLoginURL(urlToRedirectToAfterUserLogsIn);
    }

    
    Query query = new Query("Comment").addSort("timestamp", SortDirection.DESCENDING);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);

    List<Comment> comments = new ArrayList<>();

    for (Entity entity : results.asIterable()) {
      long id = entity.getKey().getId();
      String title = (String) entity.getProperty("comment");
      long timestamp = (long) entity.getProperty("timestamp");
      String email = (String) entity.getProperty("email");

      Comment comment = new Comment(id, title, timestamp, email);
      comments.add(comment);
    }

    Gson gson = new Gson();
    String response_comments = gson.toJson(comments);
    String response_json = "{ " + 
       " \"logged-in\" : \"" + stats + "\", " +
        "\"url\" : \"" + url + "\" , " +
        "\"comments\" :" + response_comments + 
    "}";

    System.out.println(response_json);

    response.setContentType("application/json;");
    response.getWriter().println(response_json);


  }


   private String convertToJson(List<String> comments) {
    Gson gson = new Gson();
    String json = gson.toJson(comments);
    return json;
    }



    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        UserService userService = UserServiceFactory.getUserService();


        String comment = request.getParameter("comment");
        long timestamp = System.currentTimeMillis();
        
        System.out.println("HHIIIIII" + comment);
        if(comment.isEmpty())
        {
            System.out.println("no addition of blank comment");
        }
        else
        {
            if(userService.isUserLoggedIn())
            {
                System.out.println("hey" + comment);
                Entity newComment = new Entity("Comment");
                newComment.setProperty("comment", comment);
                newComment.setProperty("timestamp", timestamp);
                newComment.setProperty("email", userService.getCurrentUser().getEmail());

                DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
                datastore.put(newComment);
            }
            else
            {
                System.out.println("Login to comment");
            }
        }


        response.setContentType("text/plain");  // Set content type of the response so that jQuery knows what it can expect.
        response.setCharacterEncoding("UTF-8"); // You want world domination, huh?
        response.getWriter().write("hii");
    }
}