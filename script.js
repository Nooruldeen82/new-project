var array = ["rotate30","rotate60","rotate90","rotate120",
            "rotate150","rotate180","rotate210","rotate240",
            "rotate270","rotate300","rotate330","rotate360"];

function spin(){
    var rand = Math.round(Math.random() * 11);
    document.getElementById("spinner").style.animation = array[rand] + " 4s 1 forwards ease-out";
    
    if(array[rand] == "rotate30"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#b5006b";
    }
    if(array[rand] == "rotate60"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#9700b4";
    }
    if(array[rand] == "rotate90"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#7e00ff";
    }
    if(array[rand] == "rotate120"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#0760f8";
    }

    if(array[rand] == "rotate150"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#3793c8";
    }

    if(array[rand] == "rotate180"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#00ab00";
    }

    if(array[rand] == "rotate210"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#a3ff00";
    }

    if(array[rand] == "rotate240"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#ffff00";
    }

    if(array[rand] == "rotate270"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#ffd700";
    }

    if(array[rand] == "rotate300"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#ff9800";
    }
    if(array[rand] == "rotate330"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#ff6a00";
    }
    if(array[rand] == "rotate360"){
        document.getElementById("bc").style.transitionDuration = "15s";
        document.getElementById("bc").style.backgroundColor="#ff0000";
    }

} 

