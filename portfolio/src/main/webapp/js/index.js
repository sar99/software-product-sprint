var noOfComments = 3; 
var comments;

$(document).on("submit", "#comments-form", function(event) {
    var $form = $(this);

    $.post($form.attr("action"), $form.serialize(), function(response) {
        getComments();
        $('input[name=comment').val('');

    });

    event.preventDefault(); 
})


function getMoreComments(){
    noOfComments*=2;

    let container = document.querySelector("#user-comments");
    container.innerHTML = '';

    comments["comments"].forEach((comment, index)=> {

        if(index>=noOfComments)
        return false;
        let box = document.createElement("div");

        box.classList.add("comment-item");
        box.innerHTML = "(" + comment.email + ") " + comment.comment;

        container.appendChild(box);
        })


    if(comments["comments"].length <= noOfComments)
    {
        document.querySelector("#more-comments").style.display = "none";
    }

}


async function getComments(){
        const response = await fetch("/comments");
        comments = await response.json();

        console.log(comments);

        let container = document.querySelector("#user-comments");
        container.innerHTML = '';

        comments["comments"].forEach((comment, index)=> {

            if(index>=noOfComments)
            return false;
            let box = document.createElement("div");

            box.classList.add("comment-item");
            box.innerHTML = "(" + comment.email + ") " + comment.comment;

            container.appendChild(box);
            })


        if(comments["logged-in"]=="True")
        {
            let form = document.getElementById("comments-form");
            form.style.display = "block";
            let logout = document.getElementById("logout");
            logout.style.display = "block";
            let login = document.getElementById("login");
            login.style.display = "none";

            let link = document.getElementById("logout-link");
            link.setAttribute("href", comments["url"]);
        }
        else
        {
            let form = document.getElementById("comments-form");
            form.style.display = "none";
            let logout = document.getElementById("logout");
            logout.style.display = "none";
            let login = document.getElementById("login");
            login.style.display = "block";

            let link = document.getElementById("login-link");
            link.setAttribute("href", comments["url"]);
        }

    }


$(document).ready(function () {


    getComments();
    

    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    //The reveal of website after first screen
    setTimeout(function () {
        document.getElementById("start-screen").remove();
        document.getElementById("main").style.display = "block"
        document.getElementById("nav-main").classList.add("blink-image");
        document.getElementById("my-image").classList.add("text-flicker");
        document.getElementById("saniya").classList.add("text-flicker");
        document.getElementById("saniya").style.opacity = "1";
        document.getElementById("my-image").style.opacity = "1";
    },
        3000);





    //Opening and closing of side menu on small screens using the hamburger icon
    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });



    //Display the appropriate navbar according to the screen size
    displayNav();


});


