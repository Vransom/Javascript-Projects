function Color_Function() {
    var Color_Output;
    var Colors=document.getElementById("Color_Input").value;
    var Color_String=" is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output="Red"+Color_String;
        break;
        case "Yellow":
            Color_Output="Yellow"+Color_String;
        break;
        case "Green":
            Color_Output="Green"+Color_String;
        break;
        case "Blue":
            Color_Output="Blue"+Color_String;
        break;
        case "Pink":
            Color_Output="Pink"+Color_String;
        break;
        case "Purple":
            Color_Output="Purple"+Color_String;
        break;
        default:
            Color_Output="Please enter a color exactly as writen on the above list.";
    }
    document.getElementById("Output").innerHTML=Color_Output;
}

function Hello_World_Function() {
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="the text has changed!";
}

var c = document.getElementById("Canvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

const canvas=document.getElementById("Canvas");
const ctx2=canvas.getContext("2d");
const grd=ctx2.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1,"white");

ctx2.fillStyle=grd;
ctx2.fillRect(20,20,150,100);