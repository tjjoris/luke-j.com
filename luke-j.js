/*
luke-j.js Javascript functionality for luke-j website, last edited 2024-June-30 by Luke Johnson
*/
let projectTitle = document.getElementById("project-title");
let projectImg = document.getElementById("project-image");
let projectDescription = document.getElementById("project-description");
let projectLink = document.getElementById("project-link");
let githubLink = document.getElementById("github-link");

//regrowth project
let projectItems = new Array;
projectItems[0] = new Object;
projectItems[0].title = "Regrowth";
projectItems[0].image = "regrowth-screenshot.jpg";
projectItems[0].description = "A browser based mobile or PC game testing new game mechanics programmed in javascript, CSS, and HTML, created by Luke Johnson on 2024, June, 30";
projectItems[0].projectLink = "https://rechrysalis.com/regrowth/v1/";
projectItems[0].githubLink = "https://github.com/tjjoris/regrowth-javascript";

//the science of realms project
projectItems[1] = new Object;
projectItems[1].title = "Science of Realms";
projectItems[1].image = "science-of-realms-cover-image2.png";
projectItems[1].description = "A browser based platformer programmed in Godot and GDscript, Created by Jacob Johnson, Naomi Landa, Yan Uchitel, Kaidan Cosmos, Luke Johnson, and Andrew Nguyen. Last Updated 2024, May 14";
projectItems[1].projectLink = "https://tarsin.itch.io/scienceofrealms";

//rechrysalis project
projectItems[2] = new Object;
projectItems[2].title = "Rechrysalis";
projectItems[2].image = "rechrysalis-screenshot.jpg";
projectItems[2].description = "A browser based mobile or PC game involving RTS elements. Created by Luke Johnson. Last modified on 2023-June-15";
projectItems[2].projectLink = "https://rechrysalis.com/V30014/";
projectItems[2].githubLink = "https://github.com/tjjoris/Rechrysalis-V3";

//otherworldly relics project
projectItems[3] = new Object;
projectItems[3].title = "Otherworldly Relics";
projectItems[3].image = "otherworldly-relics-screenshot.png";
projectItems[3].description = "A browser based turn based puzzle game. Created by Luke Johnson, Jacob Johnson and Kaidan Cosmos. Last updated 2023, May 05";
projectItems[3].projectLink = "https://tarsin.itch.io/otherworldly-relics";
projectItems[3].githubLink = "https://github.com/Tars1n/GameJam-2023April";

//space lane sweeper project.
projectItems[4] = new Object;
projectItems[4].title = "Spacelane Sweepers";
projectItems[4].image = "space-lane-sweeper-cover-image.png";
projectItems[4].description = "A browser based game about clearing space debris. Created by Luke Johnson, Jacob Johnson and Joe Neff. Last updated 2021, July 16";
projectItems[4].projectLink = "https://tarsin.itch.io/spacelane-sweeper";
projectItems[4].githubLink = "https://github.com/tjjoris/-GameJamSummer2021";


// var projectImages = ["regrowth-screenshot.jpg", "science-of-realms-cover-image2.png", 
//     "rechrysalis-screenshot.jpg", "otherworldly-relics-screenshot.png", "space-lane-sweeper-cover-image.png"];

let i = 0; //current project index.

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
    projectLink.setAttribute("href", projectItems[i].projectLink);
    githubLink.setAttribute("href", projectItems[i].githubLink);

    //hide the github link if no link provide, otherwise show it.
    if (projectItems[i].githubLink == undefined){
        githubLink.innerHTML = "";
    }
    else {
        githubLink.innerHTML = "github";
    }
}