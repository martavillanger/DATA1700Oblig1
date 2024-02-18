let tickets = [];
function buyTicket(){
    if (!validInputs()){
        return;
    }
    let innFilm = document.getElementById("film").value;
    let innAmount = document.getElementById("amount").value;
    let innFName = document.getElementById("fname").value;
    let innLName = document.getElementById("lname").value;
    let innPhone = document.getElementById("phone").value;
    let innEmail = document.getElementById("email").value;
    let ticketOrder = {innFilm, innAmount, innFName, innLName, innPhone, innEmail}
    tickets.push(ticketOrder)
    document.getElementById("ticketArray").replaceChildren(createTable(tickets));
    resetInputs();
}
function createTable(tickets){
    const table = document.createElement("table");
    for (let i = 0; i < tickets.length; i++){
        let ticket = tickets[i];
        const row = table.insertRow();
        for (let key in ticket){
            const cell = row.insertCell();
            cell.appendChild(document.createTextNode(ticket[key]));
        }
    }
    return table;
}
function emptyArray(){
    tickets = [];
    document.getElementById("ticketArray").innerHTML="";
}
function validFilm(){
    const innFilm = document.getElementById("film").value;
    const valid = innFilm !== "Choose film here";
    if (!valid){
        document.getElementById("filmError").innerHTML= "Choose a movie";
    }
    else{
        document.getElementById("filmError").innerHTML= "";
    }
    return valid;
}
function validAmount(){
    const innAmount = document.getElementById("amount").value;
    const numberAmount = Number(innAmount);
    const valid = numberAmount > 0;
    if (!valid){
        document.getElementById("amountError").innerHTML= "Choose at least one ticket"
    }
    else{
        document.getElementById("amountError").innerHTML= ""
    }
    return valid;
}
function validFirstName(){
    let innFName = document.getElementById("fname").value;
    //regex taken from: https://dev.to/tillsanders/let-s-stop-using-a-za-z-4a0m
    const valid = innFName.match(/[\p{Letter}\p{Mark}]+/gu);
    if (!valid){
        document.getElementById("fNameError").innerHTML= "Invalid input"
    }
    else{
        document.getElementById("fNameError").innerHTML= ""
    }
    return valid;
}
function validLastName(){
    let innLName = document.getElementById("lname").value;
    //regex taken from: https://dev.to/tillsanders/let-s-stop-using-a-za-z-4a0m
    const valid = innLName.match(/[\p{Letter}\p{Mark}]+/gu);
    if (!valid){
        document.getElementById("lNameError").innerHTML= "Invalid input"
    }
    else{
        document.getElementById("lNameError").innerHTML= ""
    }
    return valid;
}
function validPhone(){
    let innPhone = document.getElementById("phone").value;
    //regex taken from: https://stackoverflow.com/a/37114244
    const valid = innPhone.match(/^[0-9]{8}$/);
    if (!valid){
        document.getElementById("phoneError").innerHTML= "Please enter an 8 digit phone number"
    }
    else{
        document.getElementById("phoneError").innerHTML= ""
    }
    return valid;
}
function validEmail(){
    let innEmail = document.getElementById("email").value;
    //regex taken from: https://www.w3resource.com/javascript/form/email-validation.php
    const valid = innEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (!valid){
        document.getElementById("emailError").innerHTML= "Please enter a valid email address"
    }
    else{
        document.getElementById("emailError").innerHTML= "";
    }
    return valid;
}
function validInputs(){
    return validFilm() && validAmount() && validFirstName() && validLastName() && validPhone() && validEmail();
}
function resetInputs(){
    document.getElementById("film").value="Choose film here";
    document.getElementById("amount").value="";
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
}
