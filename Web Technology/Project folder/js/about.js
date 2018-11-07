structureDisplay(1);
drawMembers();

function structureDisplay(structurePage){
  let title = document.getElementById("ourStructureTitle");
  let paragraph = document.getElementById("ourStructureParagraph");
  console.log("assign successsfull");
  switch(structurePage){
    case 1:
      title.innerHTML = "Supply Chain Actors";
      paragraph.innerHTML ="RMI – Leah Butler (Chair)<br>Intel – Julian Lageard<br>Valcambi – Virginie Bahon.";
      break;
    case 2:
      title.innerHTML = "Civil society";
      paragraph.innerHTML ="IPIS – Lotte Hoex (Vice Chair)<br>Solidaridad – Boukje Theeuwes<br>Diakonia – Joakim Wohlfeil"
      break;
    case 3:
      title.innerHTML = "Governments and Insitutions";
      paragraph.innerHTML = "Dutch Ministry of Foreign Affairs – Jan Pieter Barendse (Vice Chair)<br>UK, Foreign & Commonwealth Office – Gideon Dewhirst<br>Federal Ministry of Cooperation and Development (BMZ) – Leopold von Carlowitz, GIZ";
      break;
    case 4:
    title.innerHTML = "Observers";
    paragraph.innerHTML = "OECD<br>UN Environment (UNEP)<br>The Commission’s Directorate-General for International Cooperation and Development (DG DEVCO)";
      break;
  }
}

function drawMembers(){

  let imgPath = "url('img/icons/logo"
  let imgCounter = 0; //counter is used to specify which logo
  let row = document.getElementById("topMembers1");
  let groups = row.childNodes;
  let position = 0;
  let positionDiv = groups[1];
  console.log(groups);

  for (let y = 0; y <2; y++){
    for (let i = 0; i<=11; i++){
      let logo = document.createElement("div");
      let individualPath = imgPath + imgCounter +".jpg')";
      logo.style.backgroundImage = individualPath;
      console.log(individualPath);
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
      console.log("test" + y +":" + i);
      positionDiv.appendChild(logo);
      imgCounter++;
    }
    //switches to next line
    row = document.getElementById("topMembers2");
    groups = row.childNodes;
    console.log(groups);
  }
}
