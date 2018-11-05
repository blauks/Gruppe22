/*function collapse(element) {
	var width = 100;
	var id = setInterval(frame, 5);
	
	function frame() {
		if (width <= 1) {
			clearInterval(id);
			element.style.display = "none";
		} 
		element.style.width = width;
		width -= width * 0.1;
	}
}
*/
var coll = document.getElementsByClassName("collapsible")
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
	});
}