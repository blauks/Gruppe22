var coll = document.getElementsByClassName("collapsible")
var activeImages = document.getElementsByClassName("activeImage");
var activeMaps = document.getElementsByClassName("activeMap");
var i;

for (i=0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display == "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}

		for (i = 0; i < activeImages.length; i++) {
			activeImages[i].classList.toggle("activeImage");
		}
		
		for (i = 0; i < activeMaps.length; i++) {
			activeMaps[i].classList.toggle("activeMap");
		}
		
		var artImage = content.childNodes[1].innerHTML;
		document.getElementById(artImage).classList.toggle("activeImage");
		var artMap = content.childNodes[3].innerHTML;
		document.getElementById(artMap).classList.toggle("activeMap");
		
	});
}