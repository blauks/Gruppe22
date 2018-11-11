//membersites used for the members display
const membersSite = ["https://www.tatasteel.com/", "https://www8.hp.com/nl/nl/home.html", "https://www.umicore.com/", "https://www.apple.com", "https://www.philips.co.uk", "https://www.internationaltin.org/", "https://www.intel.com",
 "https://www.nxp.com/", "http://www.valcambi.com/home/", "https://www.fairphone.com/nl/", "http://www.responsiblemineralsinitiative.org/", "https://www.tanb.org/index", "http://www.oecd.org/", "https://www.unenvironment.org/",
 "https://ec.europa.eu/europeaid/general_en",  "http://www.responsiblemines.org/en/", "http://ipisresearch.be/", "https://www.solidaridadnetwork.org/", "https://www.pactworld.org/", "https://www.diakonia.se/en/", "https://www.cordaid.org/nl/",
 "https://www.government.nl/ministries/ministry-of-foreign-affairs", "https://www.bmz.de/en/" , "https://www.gov.uk/government/organisations/foreign-commonwealth-office"];
let cooldown = false; //coldown variable to make sure that the structure window does not get to many requests at a time (can cause problems with time intervals)
//displays all the members icons
drawMembers();

//arrays of objects that have their styles changed
let structureIcons = [document.getElementById("supplyChainButtonIcon"), document.getElementById("civilSocietyButtonIcon"), document.getElementById("GovernmentsAndInstitutionsButtonIcon"), document.getElementById("observersButtonIcon")];
let membersTitles = [document.getElementById("membersTitle1"), document.getElementById("membersTitle2"), document.getElementById("membersTitle3"), document.getElementById("membersTitle4"),document.getElementById("membersTitle5"), document.getElementById("membersTitle6")];

//opens the structure display at position 0
structureDisplay(0);


//changes the content shown in the structures view, as ell as puts a radio-button like shadow around the selected button.
function structureDisplay(structurePage){
  if (!cooldown){
    cooldown=true;
    let timeVar;
    let titleContent;
    let paragraphContent;
    let title = document.getElementById("ourStructureTitle");
    let paragraph = document.getElementById("ourStructureParagraph");
    structureIconClearSelected();
    structureIcons[structurePage].style.boxShadow ="0px 0px 10px 5px #7490A1";

    //decides new content
    switch(structurePage){
      case 0:
        titleContent = "Supply Chain Actors";
        paragraphContent ="RMI – Leah Butler (Chair)<br>Intel – Julian Lageard<br>Valcambi – Virginie Bahon.";
        break;
      case 1:
        titleContent= "Civil society";
        paragraphContent ="IPIS – Lotte Hoex (Vice Chair)<br>Solidaridad – Boukje Theeuwes<br>Diakonia – Joakim Wohlfeil"
        break;
      case 2:
        titleContent = "Governments and Insitutions";
        paragraphContent = "Dutch Ministry of Foreign Affairs – Jan Pieter Barendse (Vice Chair)<br>UK, Foreign & Commonwealth Office – Gideon Dewhirst<br>Federal Ministry of Cooperation and Development (BMZ) – Leopold von Carlowitz, GIZ";
        break;
      case 3:
        titleContent = "Observers";
        paragraphContent = "OECD<br>UN Environment (UNEP)<br>The Commission’s Directorate-General for International Cooperation and Development (DG DEVCO)";
        break;
    }
    //fades out, changes the content and fades inn again. A timer is set to make sure that both the fadeout and fadeinn happens at the same time
      fadeOpacity(title, paragraph);
        setTimeout(function(){
          title.innerHTML = titleContent;
          paragraph.innerHTML = paragraphContent;
          appearOpacity(title,paragraph);
        },400);
    }else{
      setTimeout(function(){
        cooldown=false;
      },300);
    }
}

//sets all the structure icons to no box shadow
function structureIconClearSelected(){
  for(var i = 0; i< structureIcons.length; i++){
    structureIcons[i].style.boxShadow = "0px 0px 0px 0px #FFFFFF";
  }
}

//turns the opacity gradually to 0 of two elements
function fadeOpacity(title, paragraph){
  opacity = 1;
  timeVar = setInterval(function(){
    if (opacity <=0.01) {
      clearInterval(timeVar);
      title.style.opacity = 0;
      paragraph.style.opacity = 0;
    }
    title.style.opacity = opacity;
    paragraph.style.opacity = opacity;
    opacity = opacity - 0.2;
  }, 25);
}
//turns the oppacity gradually to 1 for two elements
function appearOpacity(title, paragraph){
  opacity = 0.0;
  timeVar = setInterval(function(){
    if (opacity >=0.99){
      clearInterval(timeVar);
      title.style.opacity = 1;
      paragraph.style.opacity = 1;
    }
    title.style.opacity = opacity;
    paragraph.style.opacity = opacity;
    opacity = opacity + 0.2;
  }, 25);
}


//itterates through all the logos, placing them as backgrounds in a div, and appnds them in groups of 3 - 6 - 3, two times
function drawMembers(){

  let imgPath = "url('img/iconsAbout/logo"
  let imgCounter = 0; //counter is used to specify which logo
  let row = document.getElementById("topMembers1");
  let groups = row.childNodes; //represents group container divs thats in each row
  let positionDiv = groups[1]; //groups have to be index of 1, 3 or 5, as thats the indexes of the container divs

  //used to assign a the correct tilte for glow interactions
  let titleIdCounter = 0 //starts at 0 to add vvalues 1-3
  let titleNumber = 0;

  for (let y = 0; y <2; y++){ //loops for each row
    for (let i = 0; i<=11; i++){ //loops for each icon in a row

      let logo = document.createElement("div");
      let individualPath = imgPath + imgCounter +".jpg')";
      logo.style.backgroundImage = individualPath; //uses the path to set the backgorund image to the logo icon

      //specifies if it is going into a three group or six group
      if (i <= 2){
        logo.className=("logoMembers logoThreeMembers");
        positionDiv = groups[1];
        titleNumber = titleIdCounter;
      }
      else if (i >=3 && i<=8 ){
        logo.className=("logoMembers logoSixMembers");
        positionDiv = groups[3];
        titleNumber = titleIdCounter + 1
      }
      else if (i>8){
        logo.className=("logoMembers logoThreeMembers");
        positionDiv = groups[5];
        titleNumber = titleIdCounter + 2
      }
      //makes the openMemberSite method run with the right index onclick
      let attributeOnclick = "openMemberSite(" + imgCounter + ");";
      //assigns the hover methods to the logo
      let attributeOnmouseEnter = "membersLogoEnter("+titleNumber+");";
      let attributeOnmouseExit = "membersLogoExit("+titleNumber+");";
      logo.setAttribute("onclick", attributeOnclick);
      logo.setAttribute("onmouseenter", attributeOnmouseEnter);
      logo.setAttribute("onmouseout", attributeOnmouseExit)
      //a
      logo.id = "logo"+ imgCounter;
      positionDiv.appendChild(logo);
      imgCounter++;
    }


    //switches to next line and gathers the next group
    row = document.getElementById("topMembers2");
    groups = row.childNodes;
    titleIdCounter = titleIdCounter + 3; //sets the title counter to now add values from 4-6
  }
}

// opens the website that corresponds to the logo (defined by the index of the logo and the index of the websites array)
function openMemberSite(imgNumber){
   window.open(membersSite[imgNumber]);

}
//changes the title colour when a logo in the group under it is hovered over
function membersLogoEnter(titleNumber){
  membersTitles[titleNumber].style.color = "#C32323";
}
//changes the title colour back when the mouse does not hover over a logo
function membersLogoExit(titleNumber){
  membersTitles[titleNumber].style.color = "";
}

// applys the boxshadow around the icons under the corresponding title
function membersTitleEnter(titleNumber){
  let range = getLogoRange(titleNumber);
  for(let i = range[0]; i<=range[1]; i++){
    document.getElementById("logo"+i).style.boxShadow = "0px 0px 10px 5px #C32323";
  }
}
// removes the boxshadow around the icons under the corresponding title
function membersTitleExit(titleNumber){
  let range = getLogoRange(titleNumber);
  for(let i = range[0]; i<=range[1]; i++){
    document.getElementById("logo"+i).style.boxShadow = "";
  }
}

//returns a array withthe start and end number of a group of member icon
function getLogoRange(groupNumber){
  let logoStart = 0;
  let logoEnd = 0;
  switch(groupNumber){
    case 0:
      logoStart = 0;
      logoEnd = 2;
      break;
    case 1:
      logoStart = 3;
      logoEnd = 8;
      break;
    case 2:
      logoStart = 9;
      logoEnd = 11;
      break;
    case 3:
      logoStart = 12;
      logoEnd = 14;
      break;
    case 4:
      logoStart = 15;
      logoEnd = 20;
      break;
    case 5:
      logoStart = 21 ;
      logoEnd = 23;
      break;
    }
    return [logoStart, logoEnd];

}
