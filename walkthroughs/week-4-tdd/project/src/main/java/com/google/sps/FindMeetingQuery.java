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

package com.google.sps;

import java.util.*;

public final class FindMeetingQuery {
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    
      int minutesInDay = 1440;

    //A boolean array to mark those times when everyone is available
    Boolean isAvailable[] = new Boolean[minutesInDay];
    Arrays.fill(isAvailable, Boolean.TRUE);

    Collection<String> requestedAttendees = request.getAttendees();

    long requestedDuration = request.getDuration();

    //Start and end marks of time slots while checking availability
    int start = -1, end = -1;

    List<TimeRange> slotsAvailable = new ArrayList<TimeRange>();


    for(Event event : events)
    {
        //For every event which is already in calender, check if it has any attendee which is to be present in requested meeting too.
        //if Yes, mark the minutes in the time slot for that event as false
        Set<String> eventAttendees = event.getAttendees();

        for(String attendee : requestedAttendees)
        {
            if(eventAttendees.contains(attendee))
            {
                int startTime = event.getWhen().start();
                int endTime = event.getWhen().end();

                for(int i = startTime; i < endTime ; i++)
                {
                    isAvailable[i] = false;
                }
                break;
            }
        }   

    }

    //Check for all the continuous slots of time when all the attendees will be available.
    for(int i = 0;i < minutesInDay; i++)
    {
        if(isAvailable[i])
        {
            //if we are not counting any slot already, create a new one
            if(start == -1 && end == -1)
            {
                start = i;
                end = i;
            }
            //else extend the duration of that slot by one
            else
            {
                end++;
            }
        }
        else
        {
            if(start == -1 && end == -1)
            continue;
            else
            {
                if(end - start + 1 >= requestedDuration)
                    slotsAvailable.add(TimeRange.fromStartEnd(start, end, true));
                start = -1;
                end = -1;
            }
        }
    }

    //Check for the slot ending at the last minute of the day
    if(!(start == -1 && end == -1))
    {
        if(end - start + 1 >= requestedDuration)
            slotsAvailable.add(TimeRange.fromStartEnd(start, end, true));
        start = -1;
        end = -1;
    }

    return slotsAvailable;

  }
}
