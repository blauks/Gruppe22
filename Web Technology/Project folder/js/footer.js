makeFooter();


//initializing variables
function makeFooter(){
  let footer = document.createElement("div");
  let footerLeft= document.createElement("div");
  let footerRight = document.createElement("div");
  let findUsHere = document.createElement("p");
  let contactInfo = document.createElement("p");
  let findUsHereHeader = document.createElement("p");
  let contactInfoHeader = document.createElement("p");
  let logoImg = document.createElement("img"); //todo add image

  //assigns content to the text elements
  findUsHereHeader.innerHTML="FIND US HERE";
  contactInfoHeader.innerHTML="STAY IN TOUCH";
  findUsHere.innerHTML = "Prinses Beatrixlaan 2<br />2595 AL The Hague<br/>The Netherlands";
  contactInfo.innerHTML = "<a href=\"mailto:eksampleEmail@notTheActualEPRMEmail.com\" style=color:white>eprm@rvo.nl</a><br/>+31 703 798 000";

  //addding path to ..img/footerLogo.png image
  logoImg.src = "../img/footerLogo.png";
  //assignts style to footer
  footer.style.cssText = "height: 150px; background-color:#C32323; color:white; font-family:\"Open Sans\"; position:relative; ";

  contactInfoHeader.style.cssText="opacity:0.33;";
  findUsHereHeader.style.cssText="opacity:0.33;";
  //asigns positions for the footerLeft, footerRight divs and logImg in an horizontal manner
  footerLeft.style.cssText="float: left; margin-left:10%";
  footerRight.style.cssText="float:left; position:relative; left:10%;";
  logoImg.style.cssText="position:absolute; bottom:0; right:0; height:150px";

  //appends textelements to right and left footer div
  footerLeft.appendChild(findUsHereHeader);
  footerLeft.appendChild(findUsHere);
//append button to footerLeft here!!!!
  footerRight.appendChild(contactInfoHeader);
  footerRight.appendChild(contactInfo)

  //appends the fright and left footer div to the footer
  footer.appendChild(footerLeft);
  footer.appendChild(footerRight);
  footer.appendChild(logoImg); // image not visible
  document.body.appendChild(footer);
  }
  //todo :  TODO implement image, General positioning, add button
