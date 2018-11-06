
//remember to add an empty header with ID=head at the top of the HTML document

function getInvolvedAnimation(){
    document.body.appendChild(transparentBackground);
    clickBox1.style.margin = "0px 30%";
    clickBox2.style.margin = "0px 50.5%";
    transparentBackground.setAttribute("id", "transparentBackground");
    let x = 1;
    let stage = 0;
    let moveBox = setInterval(moveBoxFunc, 10);
    function moveBoxFunc(){
        if(stage == 0){
            x = x*1.08;
            if(x >= 95){
                stage = 1;
            }
        }
        
        else if(stage == 1){
            x = x - x*0.007;
            if(x < 70){
                stage = 2;
            }
        }

        else {
            x = x*1.0035;
            if(x >= 95){
                transparentBackground.appendChild(whoAreYou);
                clearInterval(moveBox);
            }
        }



        clickBox1.style.margin = x + "px 30%";
        clickBox2.style.margin = x + "px 50.5%";
        }
    }

//For animation of the get involved button
const transparentBackground = document.createElement("div");
const clickBox1 = document.createElement("img");
const clickBox2 = document.createElement("img");

const whoAreYou = document.createElement("p");
transparentBackground.appendChild(clickBox1);
transparentBackground.appendChild(clickBox2);

clickBox1.setAttribute("id","clickBox1");
clickBox2.setAttribute("id","clickBox2");

clickBox1.setAttribute("src","img/upstream.jpg");
clickBox2.setAttribute("src","img/downstream.jpg");

whoAreYou.setAttribute("id","whoAreYou");
whoAreYou.appendChild(document.createTextNode("Which of these describes you best?"));

clickBox1.setAttribute("onclick","location.href='application.html'");
clickBox2.setAttribute("onclick","location.href='CallsForProposals.html'")


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

about.setAttribute("onclick","location.href='about.html'");
//projects.setAttribute("onclick","location.href='projects.html'")
//news.setAttribute("onclick","location.href='news.html'")

about.setAttribute("id","aboutButton");
projects.setAttribute("id", "projectsButton");
news.setAttribute("id", "newsButton");
getInvolved.setAttribute("id", "getInvolvedButton");

logo.setAttribute("Alt","logo");
logo.setAttribute("src","img/colourLogoEPRM.png")
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
