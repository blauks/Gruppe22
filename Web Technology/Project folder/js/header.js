//remember to add an empty div with ID=head at the top of the HTML document

function getInvolvedAnimation(){
    document.body.appendChild(transparentBackground);
    transparentBackground.style.position = "absolute";
    transparentBackground.style.top = "100px";
    transparentBackground.style.minHeight = "100vh";
    transparentBackground.style.width = "100vw";
    transparentBackground.style.backgroundColor = "rgba(0,0,0,0.2)";
    }

//For animation of the get involved button
var transparentBackground = document.createElement("div");
var clickBox1 = document.createElement("img");
var clickBox2 = document.createElement("img");
var clickBoxDiv = document.createElement("div");
clickBoxDiv.appendChild(clickBox1);
clickBoxDiv.appendChild(clickBox2);
transparentBackground.appendChild(clickBoxDiv);

//For navbar
var logo = document.createElement("img")
var about = document.createElement("button")
var projects = document.createElement("button")
var news = document.createElement("button")
var getInvolved = document.createElement("button")

logo.setAttribute("Alt","logo");

var buttonList = [about,projects,news,getInvolved]

about.appendChild(document.createTextNode("ABOUT"))
projects.appendChild(document.createTextNode("PROJECTS"))
news.appendChild(document.createTextNode("NEWS"))
getInvolved.appendChild(document.createTextNode("GET INVOLVED"))

document.getElementById("head").appendChild(logo)
document.getElementById("head").appendChild(about)
document.getElementById("head").appendChild(projects)
document.getElementById("head").appendChild(news)
document.getElementById("head").appendChild(getInvolved)

document.getElementById("head").style.backgroundColor = "#DCD9D9"
document.getElementById("head").style.height = "100px";
document.getElementById("head").style.margin = "-8px";

var buttons = document.createElement("div");
buttons.appendChild(about)
buttons.appendChild(projects)
buttons.appendChild(news)
buttons.appendChild(getInvolved)
document.getElementById("head").appendChild(buttons)

buttons.style.position = "absolute";
buttons.style.right = "31px";
buttons.style.top = "31px";

logo.style.position = "absolute";
logo.style.top = "32px";
logo.style.left = "32px";
logo.style.height = "34px";
logo.style.width = "200px";
logo.style.border = "1px solid black";

buttonList.forEach(function(bt){
    bt.style.fontFamily = "'Raleway', sans-serif";
    bt.style.fontStyle = "ExtraBold";
    bt.style.fontSize = "18px";
    bt.style.lineHeight = "33px";
    bt.style.letterSpacing = "10%";
    bt.style.textTransform = "uppercase";
    bt.style.backgroundColor = "#DCD9D9";
    bt.style.border = "0";
    bt.style.color = "black";
    if(bt != getInvolved){
        bt.style.position = "relative";
        bt.style.left = "-5px"
    }
})

getInvolved.style.backgroundColor = "white";
getInvolved.setAttribute("onClick","getInvolvedAnimation()");



