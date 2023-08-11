window.alert(Math.random()*100); //popup with a random number

var Y=5; //increment
Y++;
document.write(Y);

document.write("\n");

var Z=8; //decrement
Z--;
document.write(Z);

function addition_function() { //adding two numbers
    var addition=2+2;
    document.getElementById("math").innerHTML="2+2="+addition;
}

function subtraction_function() { //subtracting two numbers
    var subtraction=5-2;
    document.getElementById("math2").innerHTML="5-2="+subtraction;
}

function multiplication() { //multiplying two numbers
    var simple_math=6*8;
    document.getElementById("math3").innerHTML="6X8="+simple_math;
}

function division() { //dividing two numbers
    var simple_math2=48/6;
    document.getElementById("math4").innerHTML="48/6="+simple_math2;
}

function more_math() { //a more complicated math function
    var simple_math3=(1+2)*10/2-5;
    document.getElementById("math5").innerHTML="1 plus 2, multiplied by 10," 
    + "divided in half and then subtracted by 5="+simple_math3;
}

function modulus_operator() { //gives the remainder
    var simple_math4=25%6;
    document.getElementById("math6").innerHTML="When you divide 25 by six you have a "
    + "remainder of: "+simple_math4;
}

function negation_operator() { //makes a number negative
    var x=10;
    document.getElementById("math7").innerHTML=-x;
}

function math_round() { //rounds a number
    document.getElementById("math8").innerHTML=Math.round(4.6);
}

