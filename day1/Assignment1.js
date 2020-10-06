let movieListUL = document.getElementById("movieListUL")

let request = new XMLHttpRequest()

request.addEventListener('load', function() {

    let result = JSON.parse(this.responseText)

    let movieItems = result.Search.map((movie) => {
        return `<li class="container">
        
        <p><img id="pic" src="${movie.Poster}"></p>
        <a href="#"><b>${movie.Title}</b></a>
        <p><i>${movie.Year}</i></p>
     

        </li>`
    })

  movieListUL.insertAdjacentHTML('beforeend', movieItems.join(''))
    
})

request.open('GET', 'http://www.omdbapi.com/?s=batman&apikey=220bea67')

request.send()


function movieDetails(imdbID) {
    let detailedBatmanURL = `http://www.omdbapi.com/?s=${imdbID}&apikey=220bea67`

    let reqDetailedBatman = new XMLHttpRequest()

    reqDetailedBatman.open("GET", detailedBatmanURL)
    reqDetailedBatman.addEventListener("load", function () {
        let moviesFeature = JSON.parse(event.currentTarget.responseText)

        let moviesFeatureTemplate =
        `<div> 
             <h2>${ moviesFeature.Title}</h2>
             <img src='${ moviesFeature.Poster}'/>
             <p>${ moviesFeature.Year}</p>
             <p>${ moviesFeature.Rated}</p>
             <p>${ moviesFeature.Released}</p>
             <p>${ moviesFeature.Director}</p>
</div>`

    detailedMovieDiv.innerHTML = moviesFeatureTemplate
})

reqDetailedBatman.send()

}
    

