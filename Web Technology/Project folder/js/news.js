/*Collapsible articles + Calendar functionality*/
var coll = document.getElementsByClassName("collapsible")
var activeMonths = document.getElementsByClassName("activeMonth")
var activeDays = document.getElementsByClassName("activeDate")
var calendarMonths = document.getElementById("months");
var calendarDays = document.getElementById("days");
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
		
		for (i = 0; i < activeMonths.length; i++) {
			activeMonths[i].classList.toggle("activeMonth");
		}
		
		for (i = 0; i < activeDays.length; i++) {
			activeDays[i].classList.toggle("activeDate");
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

		calendarMonths.childNodes[month*2 - 1].classList.toggle("activeMonth"); /*Sets correct month to active*/
		calendarDays.childNodes[day*2 - 1].classList.toggle("activeDate"); /*Sets correct day to active*/
	});
}

/*Subscribe animation*/
var bar = document.getElementById("subscribe");
var barText = bar.firstChild;
bar.addEventListener("mouseover", hideBar);

function hideBar(){
	bar.style.transition = "width 2s";
	bar.style.width = "0%";
	barText.style.transition = "opacity 0.5s";
	barText.style.opacity = "0";
}

/*Input popup*/
document.getElementById("email").addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13){
		window.alert("You are now subscribed to our newsletters!");
	}
});






