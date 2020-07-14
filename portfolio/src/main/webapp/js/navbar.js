//Content/links int the navbar

const list = ["ABOUT", "EDUCATION", "EXPERIENCE", "SKILLS", "PROJECTS", "CHERRY ON TOP", "COMING SOON"]




var flag = 2;



//Display the Navbar for bigger screens 

const Nav = () => {

    var i;

    var container = document.querySelector("#nav-main");
    var nav = document.createElement("div");
    var navblur = document.createElement("div");

    nav.setAttribute("id", "navbar");
    navblur.setAttribute("id", "navbar-blur");;
    navblur.setAttribute("class", "blur");

    container.appendChild(navblur);
    container.appendChild(nav);


    container = document.querySelector("#navbar");
    for (i = 0; i < list.length; i++) {
        console.log("hi");
        var card = document.createElement("a");
        var id = list[i];
        id = id.replace(" ", "-");
        card.setAttribute('class', "nav-item");
        card.setAttribute('id', id);
        card.setAttribute("href", "#TO" + id);
        container.appendChild(card);
        document.getElementById(id).innerHTML = (list[i]);
    }
}






//Display the navbar for smaller screens

const NavHam = () => {

    var i;

    var container = document.querySelector("#nav-main");

    var open = document.createElement("div");
    open.setAttribute("class", "open");
    open.setAttribute("id", "nav-ham");

    var cls = document.createElement("span");
    cls.setAttribute("class", "cls");

    var cls1 = document.createElement("span");
    cls1.setAttribute("class", "cls");


    var temp = document.createElement("span");

    var ul = document.createElement("ul");
    ul.setAttribute("class", "sub-menu");

    for (i = 0; i < list.length; i++) {
        var li = document.createElement("li");
        var card = document.createElement("a");

        var id = list[i];
        id = id.replace(" ", "-");
        // card.setAttribute('class', "nav-item");
        // card.setAttribute('id', id);
        card.setAttribute("title", id);
        card.setAttribute("href", "#TO" + id);
        li.appendChild(card);
        card.innerHTML = (list[i]);

        ul.appendChild(li);
    }

    temp.appendChild(ul);
    open.appendChild(cls);
    open.appendChild(temp);
    open.appendChild(cls1);


    container.appendChild(open);

}






//Control the selection of navbars according to screen size on resize.

const displayNav = () => {

    //1: greater than equal to 900
    //0: less than 900

    if (window.outerWidth >= 900) {
        if (flag === 0) {
            const container = document.getElementById("nav-ham");
            container.remove();
        }
        if (flag != 1) {
            Nav();
        }
        flag = 1;
    }
    else {
        if (flag === 1) {
            const container1 = document.getElementById("navbar");
            const container2 = document.getElementById("navbar-blur");
            container1.remove();
            container2.remove();
        }
        if (flag != 0) {
            NavHam();
        }
        flag = 0;
    }
}




displayNav();





// $('a[href^="#"]').on('click', function (event) {


// });