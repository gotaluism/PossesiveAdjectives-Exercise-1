


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
    if (a1.value=="my"){
        document.getElementById("b1").innerHTML="MY";
        total=total+1;
    }
    if (a2.value =="his"){
        document.getElementById("b2").innerHTML="HIS";
        total++;
    }
    if (a3.value =="her"){
        document.getElementById("b3").innerHTML="HER";
        total++;
    }
    if (a4.value =="its"){
        document.getElementById("b4").innerHTML="ITS";
        total++;
    }
    if (a5.value =="our"){
        document.getElementById("b5").innerHTML="OUR";
        total++;
    }
    if (a6.value =="my"){
        document.getElementById("b6").innerHTML="MY";
        total++;
    }
    if (a7.value =="my"){
        document.getElementById("b7").innerHTML="MY";
        total++;
    }
    if (a8.value =="its"){
        document.getElementById("b8").innerHTML="ITS";
        total++;
    }
    if (a9.value =="their"){
        document.getElementById("b9").innerHTML="THEIR";
        total++;
    }
    if (a10.value =="their"){
        document.getElementById("b10").innerHTML="THEIR";
        total++;
    }
    if (a11.value =="his"){
        document.getElementById("b11").innerHTML="HIS";
        total++;
    }
    if (a12.value =="her"){
        document.getElementById("b12").innerHTML="HER";
        total++;
    }
    if (a13.value =="our"){
        document.getElementById("b13").innerHTML="OUR";
        total++;    
    }
    if (a14.value =="its"){
        document.getElementById("b14").innerHTML="ITS";
        total++;
    }
    alert("Tu puntaje ha sido de "+ total +"/14")
}


function iniciar(){
    
    let enviar=document.getElementById("enviar");
    enviar.addEventListener("click",una);
}


window.addEventListener("load",iniciar);
