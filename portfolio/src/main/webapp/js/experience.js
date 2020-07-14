const experience = [
    {
        logo: "./img/gbpuat.png",
        company: "G.B. Pant Univ. of Agri. & Tech.",
        desig: "Full Stack Web Development Intern",
        time: "May 2019 - June 2019",
        location: "Remote"
    },
    {
        logo: "./img/aasf.png",
        company: "Abhigyan Abhikaushalam Students' Forum, IIIT Gwalior",
        desig: "Web Administrator",
        time: "May 2019 - Present",
        location: "Gwalior, India"
    },
    {
        logo: "./img/vaidik.png",
        company: "Vaidik Technoogies Pvt. Ltd.",
        desig: "Backend Development Intern",
        time: "Aug 2019 - Oct 2019",
        location: "Remote"
    },
]





const addExperience = () => {

    var i;
    const container = document.querySelector(".experience");

    for (i = 0; i < experience.length; i++) {
        let subcontainer = document.createElement("div");
        subcontainer.setAttribute("class", "job");
        subcontainer.classList.add("flex-col");

        var j = 0;
        for (let [key, value] of Object.entries(experience[i])) {
            let temp = document.createElement("div");
            temp.setAttribute("class", key);

            if (j == 0) {
                let img = document.createElement("img");
                img.setAttribute("src", value);
                temp.appendChild(img);
            }
            else
                temp.innerHTML = value;
            j++;

            subcontainer.appendChild(temp);
        }

        container.appendChild(subcontainer);
    }
}

addExperience();