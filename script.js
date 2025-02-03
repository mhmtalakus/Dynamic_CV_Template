const namesId = document.getElementById("name");

// Image Creation
const imageElement = document.createElement("img");
imageElement.src = "../images/me.jpg";
imageElement.style.width = "100%";
imageElement.alt = "Avatar";
namesId.appendChild(imageElement);

// Fetch Profile Data
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

// Fetch User Info
const userInfoElement = document.querySelector("#user-info");

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

// Skills Section
const skillsElement = document.getElementById("skills");

// Skills Title
const skillsTitle = document.createElement("p");
skillsTitle.classList.add("w3-large");
skillsTitle.innerHTML = `<b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b>`;
skillsElement.appendChild(skillsTitle);

// Fetch Skills Data
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

// Languages Section
const languageElement = document.querySelector("#languages");

// Languages Title
const languageTitle = document.createElement("p");
languageTitle.classList.add("w3-large", "w3-text-theme");
languageTitle.innerHTML = `<b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b>`;
languageElement.appendChild(languageTitle);

// Fetch Languages Data
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

// Work Experience Section
const workElement = document.querySelector("#works");

// Work Title
const workTitle = document.createElement("h2");
workTitle.classList.add("w3-text-grey", "w3-padding-16");
workTitle.innerHTML = `<i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience`;
workElement.appendChild(workTitle);

// Fetch Work Experience Data
fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        let worksHTML = "";
        data.work_experiences.forEach((item, index) => {
            worksHTML = `
            <div class="w3-container">
                <h5 class="w3-opacity"><b>${item.title} / ${item.company}</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${item.startDate} - ${item.endDate === "Present" ? `<span class="w3-tag w3-teal w3-round">${item.endDate}</span>` : item.endDate}</h6>
                <p>${item.description}</p>
                ${index < data.work_experiences.length - 1 ? '<hr>' : ""}
            </div>
            `;
            workElement.innerHTML += worksHTML;
        })
    });

// Education Section
const educationElement = document.querySelector("#educations");

// Education Title
const educationTitle = document.createElement("h2");
educationTitle.classList.add("w3-text-grey", "w3-padding-16");
educationTitle.innerHTML = `<i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education`;
educationElement.appendChild(educationTitle);

// Fetch Education Data
fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        let educationHTML = "";
        data.educations.forEach((item, index) => {
            educationHTML = `
            <div class="w3-container">
                <h5 class="w3-opacity"><b>${item.institution}</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${item.startDate} - ${item.endDate === "Currently" ? `<span class="w3-tag w3-teal w3-round">${item.endDate}</span>` : item.endDate}</h6>
                <p>${item.degree}</p>
                ${index < data.educations.length - 1 ? '<hr>' : ""}
            </div>
            `;
            educationElement.innerHTML += educationHTML;
        })
    });

// Footer Section
const footerElement = document.getElementById("footer");

const footerTitle = document.createElement("p");
footerTitle.textContent = "Find me on social media.";
footerElement.appendChild(footerTitle);

// Fetch Social Accounts Data
fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        let footerHTML = "";
        data.social_accounts.forEach(item => {
            footerHTML = `
            <a href="${item.address}" target="_blank" style="text-decoration: none;">
                <i class="${item.icon} w3-hover-opacity" style="font-size: 30px; margin: 0 10px;"></i>
            </a>
            `;
            footerElement.innerHTML += footerHTML;
        })
    });
