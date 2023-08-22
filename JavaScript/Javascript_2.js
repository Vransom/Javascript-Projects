function validateForm() {
    let x=document.forms["myform"]["fname"].value;
    let y=document.forms["myform"]["lname"].value;
    let z=document.forms["myform"]["email"].value;
    let a=document.forms["myform"]["phone"].value;
    if (x=="", y=="", z=="", a==""); {
        alert("Must be filled out");
        return false;
    }
}

