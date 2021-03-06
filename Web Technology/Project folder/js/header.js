
//remember to add an empty header with ID=head at the top of the HTML document

function removeTransparentBackground(){
    transparentBackground.removeChild(whoAreYou);
    document.body.removeChild(transparentBackground);
}

function getInvolvedAnimation(){
    document.body.appendChild(transparentBackground);
    transparentBackground.setAttribute("id", "transparentBackground");
    let x = 1;
    let stage = 0;
    let moveBox = setInterval(moveBoxFunc, 7);
    /*Creates and performs three different stages for the "looking to contribute" and "looking for contributions" image animations */
    function moveBoxFunc(){
        if(stage == 0){
            x = x*1.1;
            if(x >= 95){
                stage = 1;
            }
        }
        
        else if(stage == 1){
            x = x - x*0.012;
            if(x < 70){
                stage = 2;
            }
        }

        else {
            x = x*1.0055;
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

clickBox1.setAttribute("Alt","upstream companies picture");
clickBox2.setAttribute("Alt","downstream companies picture");

//For navbar
const logoLeft = document.createElement("img");
const logoRight = document.createElement("img");
const about = document.createElement("button");
const projects = document.createElement("button");
const news = document.createElement("button");
const getInvolved = document.createElement("button");
const xButton = document.createElement("button");
const chooseLogo = document.createElement("a");

chooseLogo.appendChild(logoRight);
chooseLogo.appendChild(logoLeft);
document.getElementById("head").appendChild(chooseLogo);
chooseLogo.setAttribute("id","chooseLogoHeader");

about.setAttribute("class","buttons");
projects.setAttribute("class", "buttons");
news.setAttribute("class", "buttons");
getInvolved.setAttribute("class", "buttons");
getInvolved.setAttribute("onClick","getInvolvedAnimation()");

about.setAttribute("onclick","location.href='about.html'");
projects.setAttribute("onclick","location.href='Projects.html'")
news.setAttribute("onclick","location.href='News.html'")

about.setAttribute("id","aboutButton");
projects.setAttribute("id", "projectsButton");
news.setAttribute("id", "newsButton");
getInvolved.setAttribute("id", "getInvolvedButton");

logoLeft.setAttribute("Alt","logoLeft");
logoLeft.setAttribute("src","img/logo-left.png")
logoLeft.setAttribute("id", "headerLogoLeft");
logoLeft.setAttribute("onclick","location.href='index.html'");

logoRight.setAttribute("Alt","logoRight");
logoRight.setAttribute("src","img/logo-right.png")
logoRight.setAttribute("id", "headerLogoRight");
logoRight.setAttribute("onclick","location.href='index.html'");

about.appendChild(document.createTextNode("ABOUT"));
projects.appendChild(document.createTextNode("PROJECTS"));
news.appendChild(document.createTextNode("NEWS"));
getInvolved.appendChild(document.createTextNode("GET INVOLVED"));

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

xButton.appendChild(document.createTextNode("X"));
xButton.setAttribute("id","closeGetInvolved");
xButton.setAttribute("onclick","removeTransparentBackground()")
transparentBackground.appendChild(xButton);
