const skills = [

    {
        name: "C ++",
        score: "60%"
    },
    {
        name: "Python",
        score: "40%"
    },
    {
        name: "Java",
        score: "40%"
    },
    {
        name: "LAMP Stack",
        score: "70%"
    },
    {
        name: "MERN Stack",
        score: "50%"
    },
    {
        name: "Django",
        score: "50%"
    },
    {
        name: "AWS",
        score: "40%"
    },

]


const displaySkills = () => {

    var width = (skills.length * 2 + 1) * 40;


    var skillbox = document.querySelector(".skill-box");
    var skillname = document.querySelector(".skill-name");

    skillbox.style.width = width + "px";
    skillname.style.width = width + "px";


    var i;

    for (i = 0; i < skills.length; i++) {

        let graph = document.createElement("div");
        graph.setAttribute("class", "graph");
        graph.style.height = skills[i].score;

        let name = document.createElement("div");
        name.setAttribute("class", "name");
        name.innerHTML = skills[i].name;


        if (i % 3 == 0) {
            graph.classList.add("pink-gradient");
        }
        else if (i % 3 == 1) {
            graph.classList.add("g-gradient");
        }
        else {
            graph.classList.add("yellow-gradient");
        }

        skillbox.appendChild(graph);
        skillname.appendChild(name);

    }
}

displaySkills();


