/*
luke-j.js Javascript functionality for luke-j website, last edited 2024-June-30 by Luke Johnson
*/

projectImg = document.getElementById("project-image");
let projectItems = new Array;
projectItems[0] = new Object;
projectItems[0].image = "regrowth-screenshot.jpg";

projectItems[1] = new Object;
projectItems[1].image = "science-of-realms-cover-image2.png";
// var projectImages = ["regrowth-screenshot.jpg", "science-of-realms-cover-image2.png", 
//     "rechrysalis-screenshot.jpg", "otherworldly-relics-screenshot.png", "space-lane-sweeper-cover-image.png"];
let i = 0; //current index.

function prev(){
    console.log("i = "+ i);
    if(i <= 0) {
        console.log(projectItems[0].image)
        i = projectItems.length;
    }
    i --;
    
    console.log(i);
    setItem();
    // alert("working");
}
function next(){

}
function setItem(){
    projectImg.setAttribute("src", "images/" + projectItems[i].image);
}