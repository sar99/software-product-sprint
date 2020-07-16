async function getComments(){
        const response = await fetch("/get-comments");
        const comments = await response.json();

        console.log(comments);

        let container = document.querySelector(".comments");


        comments.forEach((comment)=> {
            let box = document.createElement("div");

            box.classList.add("comment-item");
            box.innerHTML = comment;

            container.appendChild(box);
            })

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


