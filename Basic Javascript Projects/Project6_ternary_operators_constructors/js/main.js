function Vote_Function() { //Ternary
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age<18)?"You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_vote+" to vote.";
}

function Vehicle(Make, Model, Year, Color) { //new and this
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}

var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML="Erik drives a "
    + Erik.Vehicle_Color+ "-colored " +Erik.Vehicle_Model+ " manufactured in "+Erik.Vehicle_Year;
}

function count_function() { //nested function
    document.getElementById("Nestedfunction").innerHTML=count();
    function count() {
        var starting_point=9;
        function Plus_one() {starting_point+=1;}
        Plus_one();
        return starting_point;
    }
}