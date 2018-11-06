

//ads footer on run
makeFooter();

//adds a footer div to the body of the document
function makeFooter(){
  //initializing variables
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
  logoImg.src = "img/footerLogo.png";
  //assignts style to footer
  footer.style.cssText = "position:fixed; bottom:10px; height: 150px; background-color:#C32323; color:white; font-family:\"Open Sans\"; position:relative; ";

  contactInfoHeader.style.cssText="opacity:0.33;";
  findUsHereHeader.style.cssText="opacity:0.33;";
  //asigns positions for the footerLeft footerRight divs in an horizontal manner
  footerLeft.style.cssText="float:left; position:relative; margin-left:10%; z-index:2;";
  footerRight.style.cssText="float:left; position:relative; left:10%; z-index:2;";

  //puts logoImg in the bottom right of the footer
  logoImg.style.cssText="position:absolute; bottom:0px; right:0px; height:150px; z-index:1; opacity:0.5;";

  //appends textelements to right and left footer div
  footerLeft.appendChild(findUsHereHeader);
  footerLeft.appendChild(findUsHere);
  //append button to footerLeft here!!!!
  footerRight.appendChild(contactInfoHeader);
  footerRight.appendChild(contactInfo)

  //appends the fright and left footer div to the footer
  footer.appendChild(footerLeft);
  footer.appendChild(footerRight);
  footer.appendChild(logoImg);
  document.body.appendChild(footer);
  }
  //todo :  TODO add button
