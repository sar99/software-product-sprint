// const skillTitles = ["AWS", "Python", "C ++", "Django", "LAMP Stack", "MERN Stack"]

const projects = [
    {
        skill: "C++",
        projectList: [
            {
                name: "THE PERIODIC TABLE",
                description: [
                    "- Developed an interactive periodic table information program.", "- Included various graphics elements and file handling."
                ],
                link: "",
                image: "periodic-table",
                stack: [
                    "C++"
                ]
            },
        ]
    },

    {
        skill: "Python",
        projectList: [
            {
                name: "AVENGERS ASSEMBLE",
                description: [
                    "- Developed a basic arcade game of hitting randomly appearing ships with 3 levels.", "- Developed using PyGame library of Python."
                ],
                link: "https://github.com/sar99/Avengers-Assemble",
                image: "avengers-assemble",
                stack: [
                    "PYTHON"
                ]
            },
        ]
    },

    {
        skill: "Java",
        projectList: [
            
            
            {
                name: "BRICK BRAKER",
                description: [
                    "- Developed an arcade game that involves braking all bricks by controlling a ball.",
                ],
                link: "https://github.com/sar99/BrickBraker-Game",
                image: "avengers-assemble",
                stack: [
                    "Java"
                ]
            },
            {
                name: "BRICK BRAKER",
                description: [
                    "- Developed an arcade game that involves braking all bricks by controlling a ball.",
                ],
                link: "https://github.com/sar99/BrickBraker-Game",
                image: "avengers-assemble",
                stack: [
                    "Java"
                ]
            },
            {
                name: "FLAPPY BIRD",
                description: [
                    "- Tried to recreate the flappy bird game using Java.",
                ],
                link: "https://github.com/sar99/FlappyBird",
                image: "avengers-assemble",
                stack: [
                    "Java"
                ]
            },
            {
                name: "PING PONG",
                description: [
                    "- Tried to recreate the very famous Ping Pong (tennis) game using Java.",
                ],
                link: "https://github.com/sar99/PingPong",
                image: "avengers-assemble",
                stack: [
                    "Java"
                ]
            },
        ]

    },
    {
        skill: "LAMP Stack (Linux, Apache, MySQL, PHP)",
        projectList: [
            {
                name: "IVH AND MDP ONLINE REGISTRATION",
                description: [
                    "- Developed a class project for online registrations of the Visitors' Hostel in ABV-IIITM.", "- Included all levels of authorisation and complete transaction cycle."
                ],
                link: "https://github.com/sar99/IVH-MDP",
                image: "ivh-mdp",
                stack: [
                    "HTML5", "CSS3", "PHP", "MYSQL", "JAVASCRIPT"
                ]
            },
            {
                name: "BOOK YOUR BOOK v1.0",
                description: [
                    "- Developed a community website for students for exchange of books.", "- Included features like upload, borrow and lend books.", "- v2.0 coming soon!"
                ],
                link: "",
                image: "book-your-book",
                stack: [
                    "HTML5", "CSS3", "PHP", "MYSQL", "JAVASCRIPT"
                ]
            },
        ]
    },

    {
        skill: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
        projectList: [
            {
                name: "MY PORTFOLIO ",
                description: [
                    "- Developed my own portfolio website.", "- Hosted the website using Heroku."
                ],
                link: "https://www.github.com/sar99",
                image: "portfolio",
                stack: [
                    "REACT.JS"
                ]
            },
            {
                name: "SKYPEY",
                description: [
                    "- Developed a chatting interface using React Redux.", "- Included functions like send, edit and delete message."
                ],
                link: "https://github.com/sar99/Skypey",
                image: "skypey",
                stack: [
                    "REACT.JS"
                ]
            },
        ]
    },


]


var max = 0;

const ProjectStructure = () => {
    var i, j, k;
    var container = document.querySelector(".projects");

    for (i = 0; i < projects.length; i++) {

        var heading = document.createElement("dt");
        heading.setAttribute("class", "skill-title");


        var headingtext = document.createElement("div");
        headingtext.setAttribute("class", "skill-title-text")
        headingtext.classList.add("flex-row");
        let name = document.createElement("div");
        name.innerHTML = projects[i].skill;
        let arrow = document.createElement("div");
        arrow.setAttribute("class", "arrow-down");

        headingtext.appendChild(name);
        headingtext.appendChild(arrow);



        var skillProjects = document.createElement("dd");
        skillProjects.setAttribute("class", "skill-projects");






        for (j = 0; j < projects[i].projectList.length; j++) {

            let content = document.createElement("div");
            content.setAttribute("class", "single-project-content");
            content.classList.add("flex-col");

            let img = document.createElement("img");
            img.setAttribute("src", "./img/" + projects[i].projectList[j].image + ".png");

            let title = document.createElement("div");
            title.setAttribute("class", "single-project-title");
            title.innerHTML = projects[i].projectList[j].name;


            let stack = document.createElement("div");
            stack.setAttribute("class", "single-project-stack");
            stack.innerHTML = projects[i].projectList[j].stack.join(" | ");
            if (j % 3 == 0) {
                stack.classList.add("pinkt");
            }
            else if (j % 3 == 1) {
                stack.classList.add("greent");
            }
            else {
                stack.classList.add("yellowt");
            }


            content.appendChild(img);
            content.appendChild(title);
            content.appendChild(stack);


            for (k = 0; k < projects[i].projectList[j].description.length; k++) {
                let description = document.createElement("div");
                description.setAttribute("class", "single-project-description");
                description.innerHTML = projects[i].projectList[j].description[k];
                content.appendChild(description);
            }

            let link = document.createElement("div");
            link.setAttribute("class", "single-project-link");
            let a = document.createElement("a");
            a.setAttribute("href", projects[i].projectList[j].link);
            a.innerHTML = "VISIT PROJECT";
            link.appendChild(a);

            content.appendChild(link);
            skillProjects.appendChild(content);

            heading.appendChild(headingtext);
            container.appendChild(heading);
            container.appendChild(skillProjects);

        }

    }

}

ProjectStructure();











if (document.readyState !== 'loading') {
    console.log("ready!");
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

function ready() {
    var accordion = document.getElementsByTagName("dt");

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            accordionClick(event);

        });
    }
}

var accordionClick = (eventHappened) => {
    console.log(eventHappened);
    var targetClicked = event.target;
    console.log(targetClicked);
    var classClicked = targetClicked.classList;
    console.log("target clicked: " + targetClicked);
    console.log(classClicked[0]);
    while ((classClicked[0] != "skill-title")) {
        console.log("parent element: " + targetClicked.parentElement);
        targetClicked = targetClicked.parentElement;
        classClicked = targetClicked.classList;
        console.log("target clicked while in loop:" + targetClicked);
        console.log("class clicked while in loop: " + classClicked);
    }
    var skillProjects = targetClicked.nextElementSibling;
    console.log(skillProjects);

    var max = 0;
    for (var i = 0; i < skillProjects.children.length; i++) {
        if (max < skillProjects.children[i].clientHeight)
            max = skillProjects.children[i].clientHeight;
    }
    var expander = targetClicked.children[1];
    if (skillProjects.style.maxHeight) {
        skillProjects.style.maxHeight = null;
    }
    else {
        var allskillProjectss = document.getElementsByTagName("dd");
        for (var i = 0; i < allskillProjectss.length; i++) {
            console.log("current skill-projects: " + allskillProjectss[i]);
            if (allskillProjectss[i].style.maxHeight) {
                console.log("there is a skill-projects already open");
                allskillProjectss[i].style.maxHeight = null;
            }
        }
        skillProjects.style.maxHeight = "100000vh";

    }
}