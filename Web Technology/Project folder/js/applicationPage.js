function dropDownMenu(bar){
    if(document.getElementById(bar.id + "Child").style.display == "inline"){
        document.getElementById(bar.id + "Child").style.display = "none";
    }
    else {
        document.getElementById(bar.id + "Child").style.display = "inline";
    }
    
}
