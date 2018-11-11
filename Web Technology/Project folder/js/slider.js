var counter = 0;

document.getElementById("next-button").addEventListener("click", slider);

function slider(){
  counter = counter + 1;
  
  if(counter%3 === 0){
    console.log("1")
    document.getElementById("logos-1").style.zIndex = "1";
    document.getElementById("logos-3").style.zIndex = "-1";
  }
  
    if(counter%3 === 1){
    console.log("2")
    document.getElementById("logos-1").style.zIndex = "-1";
    document.getElementById("logos-2").style.zIndex = "1";
  }
  
    if(counter%3 === 2){
    console.log("3")
    document.getElementById("logos-2").style.zIndex = "-1";
    document.getElementById("logos-3").style.zIndex = "1";
  }
}