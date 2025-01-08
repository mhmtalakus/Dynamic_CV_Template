const namesId = document.getElementById("name");
// console.log(namesId)

const imageElement = document.createElement("img");
imageElement.src = "me.jpg";
imageElement.style.width = "100%";
imageElement.alt = "Avatar";

namesId.appendChild(imageElement);

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        const profile = data.profile;
        const names = `
    <div class="w3-display-bottomleft w3-container w3-text-black">
        <h2 style="font-weight: bold;">${profile.firstname} ${profile.lastname}</h2>
    </div>                        
    `;
        namesId.innerHTML += names;
    });

const userInfoElement = document.querySelector("#user-info");
// console.log(userInfoElement);

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        const info = data.profile;
        const information = `
    <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>${info.profession}</p>
    <p><i class="fa fa-home fa-fw w3-margin-right w3-w3-text-teal"></i>${info.location}</p>
    <p><i class="fa fa-envelope fa-fw w3-margin-right w3-w3-text-teal"></i>${info.contacts.email}</p>
    <p><i class="fa fa-phone fa-fw w3-margin-right w3-w3-text-teal"></i>${info.contacts.phone}</p>
    `;
        userInfoElement.innerHTML += information;
    });

const skillsElement = document.getElementById("skills");
// console.log(skillsElement);

const skillsTitle = document.createElement("p");
skillsTitle.classList.add("w3-large");
skillsTitle.innerHTML = `<b><i class="fa fa-asterisk fa-fw w3-margin-right   w3-text-teal"></i>Skills</b>`;

skillsElement.appendChild(skillsTitle);

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        const skills = data.skills;
        let skillHTML = "";
        skills.forEach(skill => {
            skillHTML += `
        <p>${skill.name}</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
                <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:${skill.level}%">${skill.level}%</div>
            </div>
        `;
        });
        skillsElement.innerHTML += skillHTML;
    });

const languageElement = document.querySelector("#languages");
// console.log(languageElement);

const languageTitle = document.createElement("p");
languageTitle.classList.add("w3-large", "w3-text-theme");
languageTitle.innerHTML = `<b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b>`;

languageElement.appendChild(languageTitle);

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        let languageHTML = "";
        data.languages.forEach(item => {
            languageHTML += `
            <p>${item.language}</p>
            <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-round-xlarge w3-teal" style="height:24px; width:${item.level}%"></div>
            </div>
            `;
        });
        languageElement.innerHTML += languageHTML;
    });

const workElement = document.querySelector("#works");
// console.log(workElement);

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        let worksHTML = "";
        data.work_experiences.forEach((item, index) => {
            worksHTML = `
            <div class="w3-container">
                <h5 class="w3-opacity"><b>${item.title} / ${item.company}</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${item.startDate} - ${item.endDate === "Present" ? `<span class="w3-tag w3-teal w3-round">${item.endDate}<span>` : item.endDate}</h6>
                <p>${item.description}</p>
                ${index < data.work_experiences.length - 1 ? '<hr>' : ""}
                </div>
            `;
            workElement.innerHTML += worksHTML;
        })
    })

const educationElement = document.querySelector("#educations");
// console.log(educationElement);

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        let educationHTML = "";
        data.educations.forEach((item, index) => {
            educationHTML = `
        <div class="w3-container">
            <h5 class="w3-opacity"><b>${item.institution}</b></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${item.startDate} - ${item.endDate}</h6>
            <p>${item.degree}</p>
            ${index < data.educations.length - 1 ? '<hr>' : ""}
        </div>
        `;
            educationElement.innerHTML += educationHTML;
        })
    })
