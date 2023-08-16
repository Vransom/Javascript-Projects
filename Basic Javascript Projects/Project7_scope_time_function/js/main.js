if (17<21) { //if statement
    document.write("This is correct!" + "<br>")
}

var x=10 //Global
function Add_numbers_1() {
    document.write(20+x+"<br>");
}
function Add_numbers_2() {
    document.write(x+100+"<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { //local
    var y=10;
    document.write(20+y+"<br>");
}
function Add_numbers_4() {
    document.write(y+100);
}
Add_numbers_3();
Add_numbers_4();

function add_numbers_5() { //debug
    var z=10;
    console.log(15+z);
}
function add_numbers_6() {
    console.log(z+100);
}
add_numbers_5();
add_numbers_6();


function get_date() { //method
    if (new Date().getHours()<18) {
        document.getElementById("greeting").innerHTML="You are on time";
    }
}

function age_function() {  //else statement
    age=document.getElementById("age").value;
    if (age>=16) {
        drive="You are old enough to get your license!";
    }
    else {
        drive="You are not old enough to drive.";
    }
    document.getElementById("how_old_are_you?").innerHTML=drive;
}

function time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time<12==Time>0) {
        Reply= "It is morning time!";
    }
    else if (Time>=12==Time<18) {
        Reply="It is afternoon.";
    }
    else {
        Reply="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}