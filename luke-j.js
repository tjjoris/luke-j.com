/*
luke-j.js Javascript functionality for luke-j website, last edited 2024-July-09 by Luke Johnson
*/
//variables store references to html elements to update based on the current project.
let projectTitle = document.getElementById("project-title");
let projectImg = document.getElementById("project-image");
let projectDescription = document.getElementById("project-description");
let projectLink = document.getElementById("project-link");
let githubLink = document.getElementById("github-link");
let projectUpdate = document.getElementById("project-update");

//projectItems is an array of objects, each object represents a project with it's own fields
//which is used to populate the elements in the html page about that project.


let projectItems = [
    {
        //Regrowth
        title:"Regrowth",
        image:"regrowth-screenshot.jpg",
        description:"A browser based mobile or PC game testing new game mechanics programmed in javascript, CSS, and HTML, created by Luke Johnson.",
        projectLink:"https://rechrysalis.com/regrowth/v1/",
        githubLink:"https://github.com/tjjoris/regrowth-javascript",
        updateDate:"2024, June, 30"
    }, 
    { 
        //Science of Realms
        title:"Science of Realms",
        image:"science-of-realms-cover-image2.png",
        description:"A browser based platformer programmed in Godot and GDscript, Created by Jacob Johnson, Naomi Landa, Yan Uchitel, Kaidan Cosmos, Luke Johnson, and Andrew Nguyen.",
        projectLink:"https://tarsin.itch.io/scienceofrealms",
        githubLink:"https://github.com/tjjoris/DEP_GoedWareJam",
        updateDate:"2024, May 14"
    }, 
    {
        //Rechrysalis
        title:"Rechrysalis",
        image:"rechrysalis-screenshot.jpg",
        description:"A browser based mobile or PC game involving RTS elements. Created by Luke Johnson.",
        projectLink:"https://rechrysalis.com/V30014/",
        githubLink:"https://github.com/tjjoris/Rechrysalis-V3",
        updateDate:"2023, June 15"
    },
    {
        //Otherworldly Relics
        title:"Otherworldly Relics",
        image:"otherworldly-relics-screenshot.png",
        description:"A browser based turn based puzzle game. Created by Luke Johnson, Jacob Johnson and Kaidan Cosmos.",
        projectLink:"https://tarsin.itch.io/otherworldly-relics",
        githubLink:"https://github.com/Tars1n/GameJam-2023April",
        updateDate:"2023, May 05"
    },
    {
        //Spacelane Sweeper
        title:"Spacelane Sweeper",
        image:"space-lane-sweeper-cover-image.png",
        description:"A browser based game about clearing space debris. Created by Luke Johnson, Jacob Johnson and Joe Neff.",
        projectLink:"https://tarsin.itch.io/spacelane-sweeper",
        githubLink:"https://github.com/tjjoris/-GameJamSummer2021",
        updateDate:"2021, July 16"
    }
]
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
    //project title
    projectTitle.innerHTML = projectItems[i].title;    
    //project image
    projectImg.setAttribute("src", "images/" + projectItems[i].image);
    //project description
    projectDescription.innerHTML = projectItems[i].description
    //link to use project
    projectLink.setAttribute("onclick", "location.href='" + projectItems[i].projectLink + "'");    
    //link to github for project
    githubLink.setAttribute("onclick", "location.href='" + projectItems[i].githubLink + "'");
    //project last update date
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