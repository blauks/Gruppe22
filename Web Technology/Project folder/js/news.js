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

/*Collapsible articles + Calendar functionality*/

var coll = document.getElementsByClassName("collapsible")
var i;

for (i=0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display == "block") { /*Toggles article visibility*/
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
		
		var date = content.childNodes[1].innerHTML; /*Gets article date*/
		if (date.charAt(1) != "."){ /*Gets article day*/
			var day = date.charAt(0) + date.charAt(1);
			if (date.charAt(4) != ".") /*Gets article moth*/
				var month = date.charAt(3) + date.charAt(4);
			else
				var month = date.charAt(3);
		}
		else{
			var day = date.charAt(0);
			if (date.charAt(3) != ".")
				var month = date.charAt(2) + date.charAt(3);
			else
				var month = date.charAt(2);
		}
		
		var calendarDays = document.getElementById("days");
		var calendarMonths = document.getElementById("months");
		
		/*
		var j;
		var k;
		
		for (j = 0; j < 12; j++){
			if (j == month)
				calendarMonths.childNodes[j*2 - 1].classList.toggle("activeMonth"); /*Sets correct month to active*/
			/*
			else 
				calendarMonths.childNodes[j*2 - 1].classList.toggle("inactiveMonth"); /*Sets other monts to inactive
		}
		*/
		calendarMonths.childNodes[month*2 - 1].classList.toggle("activeMonth"); /*Sets correct month to active*/
		calendarDays.childNodes[day*2 - 1].classList.toggle("activeDate"); /*Sets correct day to active*/
	});
}

/*Subscribe animation*/
/*
console.log(document.getElementById("subscribe").offsetWidth);

function shrink() {
	var elem = document.getElementById("subscribe");
	var width = elem.offsetWidth;
	console.log(width);
	var id = setInterval(frame, 5);
	function frame(){
		if (width == 0){
			clearInterval(id);
		}
		else {
			console.log(width);
			width = width - 10;
			document.getElementById("subscribe").offsetWidth = width;
		}
	}
}
*/









