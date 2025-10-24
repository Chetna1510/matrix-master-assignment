 // Get DOM elements
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const moviesGrid = document.getElementById('movies-grid');
const noResults = document.getElementById('no-results');

searchBtn.addEventListener("click", function(e){
    
    e.preventDefault();
    moviesGrid.innerHTML = '';
    let searchValue = searchInput.value;
    const API_KEY = '4445186d';
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`;

    let http = new XMLHttpRequest();
    http.open('GET', url);
    http.responseType = 'json';
    http.onreadystatechange = function (){
        console.log(http.response.Response);
        if ( http.response === null ) {
            noResults.innerText = 'No movies found. Try another search!';
            return;
        }
        if( http.readyState === 4 && http.status === 200 && http.response.Response === "True") {
            let searchResult = http.response.Search;
            displayMovies(searchResult);
        }
        
    };
    http.send();
});

function displayMovies(searchResult) {
    
    
    for(let i=0; i < searchResult.length; i++){
        
        let moviePoster = searchResult[i].Poster;
        const card = document.createElement('div');
        card.classList.add('movie-card');
        let moviePosterDisplay = document.createElement("img");
        moviePosterDisplay.setAttribute('src', moviePoster);
        card.appendChild(moviePosterDisplay);

        let movieTitle = searchResult[i].Title;
        let movieTitleDisplay = document.createElement("h3");
        movieTitleDisplay.setAttribute('class', "title");
        movieTitleDisplay.innerHTML = movieTitle;
        card.appendChild(movieTitleDisplay);

        let movieYear = searchResult[i].Year;
        let movieYearDisplay = document.createElement("h4");
        movieYearDisplay.setAttribute('class', "year");
        movieYearDisplay.innerHTML = movieTitle;
        card.appendChild(movieYearDisplay);

        moviesGrid.appendChild(card);
    }
}