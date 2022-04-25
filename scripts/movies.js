// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
async function myMovies(){

    try{
        const name = document.getElementById('search').value;

        let res = await fetch(
            `http://www.omdbapi.com/?apikey=a1d2ead6&s=${name}`
        );
        let data = await res.json();
        // console.log('data:', data);
        let movie = data.Search;
        appendData(movie);
    }
    catch(err){
        console.log('err:', err);
    }
}

function appendData(movie){
    document.getElementById('movies').innerHTML = null;
    movie.forEach(function(el){
          let div = document.createElement('div');

          let poster = document.createElement('img');
          poster.src = el.Poster;

          let title = document.createElement('h4');
          title.innerText = el.Title;

          let btn = document.createElement('button');
          btn.innerText = "Book now";
          btn.setAttribute("class","book_now");
          btn.addEventListener("click",function(){
              addMoviesIn(el);
          });

          div.append(poster, title, btn);
          document.getElementById('movies').append(div);
    });
}
let Mdata = [];
function addMoviesIn(el){
    // console.log('el:', el);
    Mdata.push(el);
    localStorage.setItem("movie",JSON.stringify(Mdata));
    window.location.href = "checkout.html";
}
async function main(){
    let data = await myMovies();
    if(data===undefined){
        return false;
    }
    appendData(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout();
    }
    id = setTimeout(function(){
        func();
    }, delay);
}
