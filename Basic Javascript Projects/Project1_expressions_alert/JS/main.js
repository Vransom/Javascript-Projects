var Sent1="This is the beginning of the string"; //creating variable Sent1
var Sent2=" and this is the end of the string"; //creating variable Sent2

document.write(Sent1+Sent2); //concatenating Sent1 and Sent2 together
document.write("<br>");
document.write(74+25); //writing an expression
document.write("<br>");

function My_First_Function() { //defining a function and naming it
    var str="This is the button text!"; //defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML=str; //putting the value of the variableinto the HTML elementFromPoint with the "Button_Text" ID
}