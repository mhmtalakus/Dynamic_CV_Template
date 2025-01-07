const namesId = document.getElementById("name");
// console.log(name)

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
