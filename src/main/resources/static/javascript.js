let tickets = [];

function buyTicket(){
    let innFilm = document.getElementById("film").value;
    let innAmount = document.getElementById("amount").value;
    let innFName = document.getElementById("fname").value;
    let innLName = document.getElementById("lname").value;
    let innPhone = document.getElementById("phone").value;
    let innEmail = document.getElementById("email").value;
    let ticketOrder = {innFilm, innAmount, innFName, innLName, innPhone, innEmail}
    tickets.push(ticketOrder)
    document.getElementById("ticketArray").replaceChildren(createTable(tickets));
}

function emptyArray(){
    tickets = [];
    document.getElementById("ticketArray").innerHTML="";
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
