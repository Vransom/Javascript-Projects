var X=100
document.write(X);
{
    let X=50;
    document.write("<br>"+X);
}
document.write("<br>"+X);

function Call_Loop() { //while loop
    var Digit="";
    var X=1;
    while (X<11) {
        Digit+="<br>"+X;
        X++;
    }
    document.getElementById("loop").innerHTML=Digit;
}

function call_length() {
    let text="Hello World";
    let length=text.length;
    document.getElementById("word").innerHTML=length;
}

var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_Loop() { //for loop
    for (Y=0; Y<Instruments.length; Y++) {
        Content += Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function() { //array
    var friend=[];
    friend[0]="Waleed";
    friend[1]="Katie";
    friend[2]="Lizzy";
    friend[3]="Kyleigh";
    document.getElementById("Array").innerHTML="One of my friends is " + friend[1]
    + ".";
}

function constant_function() { //creating a constant
    const car={type:"Toyota", make:"Corolla", color:"grey"};
    car.color="white";
    car.price="$16k";
    car.year="2016";
    document.getElementById("constant").innerHTML="The cost of the "+ car.color + " " + car.type
    + " was " + car.price +", and it was made in "+car.year;
}

let car= { //creating an objext
    make: "Dodge ",
    model: "Viper",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "This car is a "+this.year+this.color+this.make+this.model;
    }
};
document.getElementById("Car_Object").innerHTML=car.description();

