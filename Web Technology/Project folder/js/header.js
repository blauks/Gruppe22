//remember to add an empty header with ID=head at the top of the HTML document

function getInvolvedAnimation(){
    document.body.appendChild(transparentBackground);
    clickBox1.style.margin = "0px 37.5%";
    transparentBackground.setAttribute("id", "transparentBackground");
    let x = 1;
    let moveBox = setInterval(moveBoxFunc, 10);
    function moveBoxFunc(){
        clickBoxDiv.style.margin = x + "px 37.5%";
        x = x*1.1;
        if(x > 195){
            clearInterval(moveBox);
        }
    }
    }

//For animation of the get involved button
const transparentBackground = document.createElement("div");
const clickBox1 = document.createElement("img");
const clickBox2 = document.createElement("img");
const clickBoxDiv = document.createElement("div");
clickBoxDiv.appendChild(clickBox1);
clickBoxDiv.appendChild(clickBox2);
transparentBackground.appendChild(clickBoxDiv);

clickBox1.setAttribute("id","clickBox1");
clickBox2.setAttribute("id","clickBox2");
clickBoxDiv.setAttribute("id","clickBoxDiv")

//For navbar
const logo = document.createElement("img")
const about = document.createElement("button")
const projects = document.createElement("button")
const news = document.createElement("button")
const getInvolved = document.createElement("button")

about.setAttribute("class","buttons");
projects.setAttribute("class", "buttons");
news.setAttribute("class", "buttons");
getInvolved.setAttribute("class", "buttons");
getInvolved.setAttribute("onClick","getInvolvedAnimation()");

about.setAttribute("id","aboutButton");
projects.setAttribute("id", "projectsButton");
news.setAttribute("id", "newsButton");
getInvolved.setAttribute("id", "getInvolvedButton");

logo.setAttribute("Alt","logo");
logo.setAttribute("id", "headerLogo");

const buttonList = [about,projects,news,getInvolved]

about.appendChild(document.createTextNode("ABOUT"));
projects.appendChild(document.createTextNode("PROJECTS"));
news.appendChild(document.createTextNode("NEWS"));
getInvolved.appendChild(document.createTextNode("GET INVOLVED"));

document.getElementById("head").appendChild(logo);
document.getElementById("head").appendChild(about);
document.getElementById("head").appendChild(projects);
document.getElementById("head").appendChild(news);
document.getElementById("head").appendChild(getInvolved);

const buttons = document.createElement("div");
buttons.setAttribute("id","allHeaderButtons");
buttons.appendChild(about);
buttons.appendChild(projects);
buttons.appendChild(news);
buttons.appendChild(getInvolved);
document.getElementById("head").appendChild(buttons);
