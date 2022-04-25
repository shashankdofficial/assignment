// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



let total = JSON.parse(localStorage.getItem("amount")) || [];
    
    document.getElementById('wallet').innerText = total;

    function confirm(){
        let no = document.getElementById('number_of_seats').value;
        if(Number(no)*100>total){
            alert('Insufficiet Blance!');
        }
        else if(Number(no)*100<total){
            alert('Booking Successfull');
            let x = Number(no)*100;
            total = total-x;
            localStorage.setItem("amount", JSON.stringify(total));
            window.location.reload();
        }
    }

    let data = JSON.parse(localStorage.getItem("movie"));

data.forEach(function(data){
    let div = document.createElement('div');

    let poster = document.createElement('img');
    poster.src = data.Poster;

    let title = document.createElement('h4');
    title.innerText = data.Title;

    div.append(title, poster);
    document.getElementById('movie').append(div);
});