


function una(){
    var a1=document.getElementById("a1");
    var a2=document.getElementById("a2");
    var a3=document.getElementById("a3");
    var a4=document.getElementById("a4");
    var a5=document.getElementById("a5");
    var a6=document.getElementById("a6");
    var a7=document.getElementById("a7");
    var a8=document.getElementById("a8");
    var a9=document.getElementById("a9");
    var a10=document.getElementById("a10");
    var a11=document.getElementById("a11");
    var a12=document.getElementById("a12");
    var a13=document.getElementById("a13");
    var a14=document.getElementById("a14");
    let total=0;
    if (a1="my"){
        total=total+1;
    }
    if (a2 ="his"){
        total=total+1;
    }
    if (a3 ="her"){
        total=total+1;
    }
    if (a4 ="its"){
        total=total+1;
    }
    if (a5 ="our"){
        total=total+1;
    }
    if (a6 ="my"){
        total=total+1;
    }
    if (a7 ="my"){
        total=total+1;
    }
    if (a8 ="its"){
        total=total+1;
    }
    if (a9 ="their"){
        total=total+1;
    }
    if (a10 ="their"){
        total=total+1;
    }
    if (a11 ="his"){
        total=total+1;
    }
    if (a12 ="her"){
        total=total+1;
    }
    if (a13 ="our"){
        total=total+1;
    }
    if (a14 ="its"){
        total=total+1;
    }
    alert("Tu puntaje ha sido de "+ total +"/14")
}


function iniciar(){
    
    let enviar=document.getElementById("enviar");
    enviar.addEventListener("click",una);
}


window.addEventListener("load",iniciar);