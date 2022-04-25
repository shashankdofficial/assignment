// Store the wallet amount to your local storage with key "amount"

    let total = JSON.parse(localStorage.getItem("amount")) || [];
    
    document.getElementById('wallet').innerText = total;

    

function addMoney()
{
    // event.preventDefault();
    let addamount = document.getElementById('amount').value;
    // total.push(addamount);

    let wallet = document.getElementById('wallet').innerText
    wallet = Numbe
    localStorage.setItem("amount", JSON.stringify(addamount));
}