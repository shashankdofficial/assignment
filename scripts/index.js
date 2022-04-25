// Store the wallet amount to your local storage with key "amount"

    let amount = JSON.parse(localStorage.getItem("amount")) || [];
    
    document.getElementById('wallet').innerText = amount;

    

function addMoney()
{
    
    let amount = document.getElementById('amount').value;
    let wallet = document.getElementById('wallet').innerText
    wallet = Number(wallet)+Number(amount);
    document.getElementById('wallet').innerText = wallet;
    localStorage.setItem("amount", JSON.stringify(wallet));
}