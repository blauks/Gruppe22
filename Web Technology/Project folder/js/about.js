const membersSite = ["https://www.tatasteel.com/", "https://www8.hp.com/nl/nl/home.html", "https://www.umicore.com/", "https://www.apple.com", "https://www.philips.co.uk", "https://www.internationaltin.org/", "https://www.intel.com",
 "https://www.nxp.com/", "http://www.valcambi.com/home/", "https://www.fairphone.com/nl/", "http://www.responsiblemineralsinitiative.org/", "https://www.tanb.org/index", "http://www.oecd.org/", "https://www.unenvironment.org/",
 "https://ec.europa.eu/europeaid/general_en",  "http://www.responsiblemines.org/en/", "http://ipisresearch.be/", "https://www.solidaridadnetwork.org/", "https://www.pactworld.org/", "https://www.diakonia.se/en/", "https://www.cordaid.org/nl/",
 "https://www.government.nl/ministries/ministry-of-foreign-affairs", "https://www.bmz.de/en/" , "https://www.gov.uk/government/organisations/foreign-commonwealth-office"];







drawMembers();
let cooldown = false;
structureDisplay(1);
let pressedButton = 1;


function structureDisplay(structurePage){
  if (!cooldown){
    cooldown=true;
    let timeVar;
    let titleContent;
    let paragraphContent;
    let title = document.getElementById("ourStructureTitle");
    let paragraph = document.getElementById("ourStructureParagraph");
    console.log(title.style.opacity);

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
        },1400);
    }else{
      setTimeout(function(){
        cooldown=false;
      },1400);
    }
}

function fadeOpacity(title, paragraph){
  opacity = 1;
  timeVar = setInterval(function(){
    if (opacity <=0.01) {
      clearInterval(timeVar);
      title.style.opacity = 0;
      paragraph.style.opacity = 0;
      console.log("oppasity reset to 0");
    }
    title.style.opacity = opacity;
    paragraph.style.opacity = opacity;
    opacity = opacity - 0.05
    console.log(opacity);
  }, 25);
}
function appearOpacity(title, paragraph){
  opacity = 0.0;
  timeVar = setInterval(function(){
    if (opacity >=0.99){
      clearInterval(timeVar);
      title.style.opacity = 1;
      paragraph.style.opacity = 1;
      console.log("oppasity reset to 1");
    }
    title.style.opacity = opacity;
    paragraph.style.opacity = opacity;
    opacity = opacity + 0.05;
    console.log(opacity);
  }, 50);
}



function changeOpacity(title,paragraph,percentage){
  let opacity = Number(title.style.opacity);
  opacity = String(opacity +percentage);
  console.log(opacity)
  title.style.opacity =  opacity;
  paragraph.style.opacity = opacity;

}

//itterates through all the logos, placing them as backgrounds in a div, and appnds them in groups of 3 - 6 - 3, two times
function drawMembers(){


  let imgPath = "url('img/icons/logo"
  let imgCounter = 0; //counter is used to specify which logo
  let row = document.getElementById("topMembers1");
  let groups = row.childNodes;
  let position = 0;
  let positionDiv = groups[1]; //groups have to be index of 1, 3 or 5, as thats the indexes of the container divs

  for (let y = 0; y <2; y++){
    for (let i = 0; i<=11; i++){
      let logo = document.createElement("div");

      let individualPath = imgPath + imgCounter +".jpg')";
      logo.style.backgroundImage = individualPath;
      //specifies if it is going into a three group or six group
      if (i <= 2){
        logo.className=("logoImg logoThreeMembers");
        positionDiv = groups[1]
      }
      else if (i >=3 && i<=8 ){
        logo.className=("logoImg logoSixMembers");
        positionDiv = groups[3];
      }
      else if (i>8){
        logo.className=("logoImg logoThreeMembers");
        positionDiv = groups[5];
      }
      let attribute = "openMemberSite(" + imgCounter + ");"
      logo.setAttribute("onclick", attribute);
      positionDiv.appendChild(logo);
      imgCounter++;
    }
    //switches to next line
    row = document.getElementById("topMembers2");
    groups = row.childNodes;
  }
}

function openMemberSite(imgNumber){
  console.log("ran" + imgNumber);
   window.open(membersSite[imgNumber]);

}
