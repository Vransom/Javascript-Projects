function my_dictionary() {
    var Animal = {  //assigning a variable as a dictionary
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark",
        Sound:"Bark"
        };
        delete Animal.Sound;
        document.getElementById("dictionary").innerHTML=Animal.Sound; //displaying the string
    }
