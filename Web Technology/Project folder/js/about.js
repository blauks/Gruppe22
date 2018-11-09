//membersites used for the members display
const membersSite = ["https://www.tatasteel.com/", "https://www8.hp.com/nl/nl/home.html", "https://www.umicore.com/", "https://www.apple.com", "https://www.philips.co.uk", "https://www.internationaltin.org/", "https://www.intel.com",
 "https://www.nxp.com/", "http://www.valcambi.com/home/", "https://www.fairphone.com/nl/", "http://www.responsiblemineralsinitiative.org/", "https://www.tanb.org/index", "http://www.oecd.org/", "https://www.unenvironment.org/",
 "https://ec.europa.eu/europeaid/general_en",  "http://www.responsiblemines.org/en/", "http://ipisresearch.be/", "https://www.solidaridadnetwork.org/", "https://www.pactworld.org/", "https://www.diakonia.se/en/", "https://www.cordaid.org/nl/",
 "https://www.government.nl/ministries/ministry-of-foreign-affairs", "https://www.bmz.de/en/" , "https://www.gov.uk/government/organisations/foreign-commonwealth-office"];
let cooldown = false;
//displays all the members icons
drawMembers();

structureDisplay(1);




function structureDisplay(structurePage){
  if (!cooldown){
    cooldown=true;
    let timeVar;
    let titleContent;
    let paragraphContent;
    let title = document.getElementById("ourStructureTitle");
    let paragraph = document.getElementById("ourStructureParagraph");

    //decides new content
    switch(structurePage){
      case 1:
        titleContent = "Supply Chain Actors";
        paragraphContent ="RMI – Leah Butler (Chair)<br>Intel – Julian Lageard<br>Valcambi – Virginie Bahon.";
        break;
      case 2:

        titleContent= "Civil society";
        paragraphContent ="IPIS – Lotte Hoex (Vice Chair)<br>Solidaridad – Boukje Theeuwes<br>Diakonia – Joakim Wohlfeil"
        break;
      case 3:
        titleContent = "Governments and Insitutions";
        paragraphContent = "Dutch Ministry of Foreign Affairs – Jan Pieter Barendse (Vice Chair)<br>UK, Foreign & Commonwealth Office – Gideon Dewhirst<br>Federal Ministry of Cooperation and Development (BMZ) – Leopold von Carlowitz, GIZ";
        break;
      case 4:
        titleContent = "Observers";
        paragraphContent = "OECD<br>UN Environment (UNEP)<br>The Commission’s Directorate-General for International Cooperation and Development (DG DEVCO)";
        break;
    }
      fadeOpacity(title, paragraph);
        setTimeout(function(){
          title.innerHTML = titleContent;
          paragraph.innerHTML = paragraphContent;
          appearOpacity(title,paragraph);
        },400);
    }else{
      setTimeout(function(){
        cooldown=false;
      },200);
    }
}

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


  for (let y = 0; y <2; y++){ //loops for each row
    for (let i = 0; i<=11; i++){ //loops for each icon in a row

      let logo = document.createElement("div");
      let individualPath = imgPath + imgCounter +".jpg')";
      logo.style.backgroundImage = individualPath; //uses the path to set the backgorund image to the logo icon


      //specifies if it is going into a three group or six group
      if (i <= 2){
        logo.className=("logoMembers logoThreeMembers");
        positionDiv = groups[1]
      }
      else if (i >=3 && i<=8 ){
        logo.className=("logoMembers logoSixMembers");
        positionDiv = groups[3];
      }
      else if (i>8){
        logo.className=("logoMembers logoThreeMembers");
        positionDiv = groups[5];
      }
      //makes the openMemberSite method run with the right index onclick
      let attribute = "openMemberSite(" + imgCounter + ");"
      logo.setAttribute("onclick", attribute);

      positionDiv.appendChild(logo);
      imgCounter++;
    }


    //switches to next line and gathers the next group
    row = document.getElementById("topMembers2");
    groups = row.childNodes;
  }
}

// opens the website that corresponds to the logo (defined by the index of the logo and the index of the websites array)
function openMemberSite(imgNumber){
   window.open(membersSite[imgNumber]);

}
function memberTextHover(iconGroup){
  iconGroup.children.transition("")
}
