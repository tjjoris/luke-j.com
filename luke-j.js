/*
luke-j.js Javascript functionality for luke-j website, last edited 2024-July-09 by Luke Johnson
*/
let projectTitle = document.getElementById("project-title");
let projectImg = document.getElementById("project-image");
let projectDescription = document.getElementById("project-description");
let projectLink = document.getElementById("project-link");
let githubLink = document.getElementById("github-link");
let projectUpdate = document.getElementById("project-update");

//regrowth project
let projectItems = new Array;
projectItems[0] = new Object;
projectItems[0].title = "Regrowth";
projectItems[0].image = "regrowth-screenshot.jpg";
projectItems[0].description = "A browser based mobile or PC game testing new game mechanics programmed in javascript, CSS, and HTML, created by Luke Johnson.";
projectItems[0].projectLink = "https://rechrysalis.com/regrowth/v1/";
projectItems[0].githubLink = "https://github.com/tjjoris/regrowth-javascript";
projectItems[0].updateDate = "2024, June, 30";

//the science of realms project
projectItems[1] = new Object;
projectItems[1].title = "Science of Realms";
projectItems[1].image = "science-of-realms-cover-image2.png";
projectItems[1].description = "A browser based platformer programmed in Godot and GDscript, Created by Jacob Johnson, Naomi Landa, Yan Uchitel, Kaidan Cosmos, Luke Johnson, and Andrew Nguyen.";
projectItems[1].projectLink = "https://tarsin.itch.io/scienceofrealms";
projectItems[1].githubLink = "https://github.com/tjjoris/DEP_GoedWareJam";
projectItems[1].updateDate = "2024, May 14";

//rechrysalis project
projectItems[2] = new Object;
projectItems[2].title = "Rechrysalis";
projectItems[2].image = "rechrysalis-screenshot.jpg";
projectItems[2].description = "A browser based mobile or PC game involving RTS elements. Created by Luke Johnson.";
projectItems[2].projectLink = "https://rechrysalis.com/V30014/";
projectItems[2].githubLink = "https://github.com/tjjoris/Rechrysalis-V3";
projectItems[2].updateDate = "2023, June 15";

//otherworldly relics project
projectItems[3] = new Object;
projectItems[3].title = "Otherworldly Relics";
projectItems[3].image = "otherworldly-relics-screenshot.png";
projectItems[3].description = "A browser based turn based puzzle game. Created by Luke Johnson, Jacob Johnson and Kaidan Cosmos.";
projectItems[3].projectLink = "https://tarsin.itch.io/otherworldly-relics";
projectItems[3].githubLink = "https://github.com/Tars1n/GameJam-2023April";
projectItems[3].updateDate = "2023, May 05";

//space lane sweeper project.
projectItems[4] = new Object;
projectItems[4].title = "Spacelane Sweepers";
projectItems[4].image = "space-lane-sweeper-cover-image.png";
projectItems[4].description = "A browser based game about clearing space debris. Created by Luke Johnson, Jacob Johnson and Joe Neff.";
projectItems[4].projectLink = "https://tarsin.itch.io/spacelane-sweeper";
projectItems[4].githubLink = "https://github.com/tjjoris/-GameJamSummer2021";
projectItems[4].updateDate = "2021, July 16";
console.log(githubLink)

let i = 0; //current project index. This is used when cyclilng through current displayed project.

//on load set the default project
window.onload = function() {
    setItem();
}

//go to previous item.
function prev(){
    //if first wrap to last item.
    if(i <= 0) {
        i = projectItems.length;
    }
    i --;
    
    console.log(i);
    setItem();
}

//go to next item.
function next(){
    //if last wrap to first item.
    if (i >= projectItems.length - 1) {
        i = -1;
    }
    i ++;
    console.log(i);
    setItem();
}
//set all items in the div container for the current selected project.
function setItem(){
    projectTitle.innerHTML = projectItems[i].title;    
    projectImg.setAttribute("src", "images/" + projectItems[i].image);
    projectDescription.innerHTML = projectItems[i].description
    projectLink.setAttribute("onclick", "location.href='" + projectItems[i].projectLink + "'");    
    githubLink.setAttribute("onclick", "location.href='" + projectItems[i].githubLink + "'");
    projectUpdate.innerHTML = "Last update: " + projectItems[i].updateDate;
    //hide the github link if no link provided.
    if (projectItems[i].githubLink == undefined){
        githubLink.classList.add("make-hidden");
    }
    //github link is provided so show it.
    else {
        githubLink.innerHTML = "github";
        githubLink.classList.remove("make-hidden");
    }
}