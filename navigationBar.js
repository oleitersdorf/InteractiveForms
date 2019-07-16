
function openNav() {
    document.getElementById("navigationTab").style.height = "100%";
}

function closeNav() {
    document.getElementById("navigationTab").style.height = "0%";
}

function menuButtonPressed(x) {
    
    x.classList.toggle("change");
    
    if (x.classList.contains("change")){
        openNav();
    }
    else{
        closeNav();
    }
    
}

function init(){
    resize();
//    processUrlVars();
}

function processUrlVars(){
    var elementName = getUrlVars()["element"];
    document.getElementById(elementName).style.color = 'orange';
    document.getElementById(elementName + "Tab").style.color = 'orange';
}

function resize(){
    var w = window.innerWidth;
    if (w > 1000){
        document.getElementById("menuButton").classList.add("noneElement");
        document.getElementById("menuBar").classList.remove("noneElement");
    }
    else{
        document.getElementById("menuButton").classList.remove("noneElement");
        document.getElementById("menuBar").classList.add("noneElement");
    }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                                             vars[key] = value;
                                             });
    return vars;
}
