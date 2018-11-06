structureDisplay(1);

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
