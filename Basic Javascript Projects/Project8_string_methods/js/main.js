function full_sentence() { //concat
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML=whole_sentence;
}

function slice_method() { //slice
    var sentence = "All work and no play makes Johhny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML=section;
}

function uppercase() {
    let text="Victoria";
    let result=text.toUpperCase();
    document.getElementById("name").innerHTML=result;
}

function search() {
    var text="I have a black cat";
    var result=text.search("black");
    document.getElementById("color").innerHTML=result;
}

function string_method2() { //to string
    var x=179;
    document.getElementById("numbers_to_string").innerHTML=x.toString();
}

function precision_method() { //to precision
    var y=124348.49587438574398;
    document.getElementById("precision").innerHTML=y.toPrecision(10);
}

function fixed_method() {
    var z=55.454;
    var result=z.toFixed();
    document.getElementById("fixed").innerHTML=result;
}

function value_of_method() {
    var a= "My name is Victoria";
    var result=a.valueOf();
    document.getElementById("valueof").innerHTML=result;
}