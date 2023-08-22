function displayType(character) {
    var characterType=character.getAttribute("data-character-type");
    alert(characterType+" is a class in "+ character.innerHTML);
}