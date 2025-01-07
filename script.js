const namesId = document.getElementById("name");
// console.log(namesId)

fetch("./data.json")
.then(response => response.json())
.then(data => {
    const profile = data.profile;
    const names = `
    <div class="w3-display-bottomleft w3-container w3-text-black">
        <h2>${profile.firstname} ${profile.lastname}</h2>
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