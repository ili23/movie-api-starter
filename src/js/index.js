const DOMSelectors = {
    grid: document.querySelector(".movie-grid"),

};
const genre = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ];

  const found = genre.filter((element) => element.id ===27).map((e)=> e.name);
  console.log(found);

const apiKey = "ce2451628f94a825ae7f08aa5d55345e";
const query = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=10000&vote_average.gte=8`;
const genreQuery = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

const test = async function () {
    try {
        
    } catch (error) {
        console.log(error);
    }
}
const init = async function () {
        try {
            const response = await fetch(query);
            const data = await response.json();
            data.results.forEach((element) => {

              const genreDisplay = genre.filter((e)=>element.genre_ids.includes(e.id)).map((e) =>`${e.name}`);
                DOMSelectors.grid.insertAdjacentHTML(
                    "beforeend", `<div class="movie-card">
                    <div class="movie-card-front">
                      <img
                        src="https://image.tmdb.org/t/p/w300/${element.poster_path}"
                        alt=""
                        class="poster"
                      />
                    </div>
                    <div class="movie-card-back">
                      <h3 class="movie-card-header">${element.title}</h3>
                      <div class="score-box">
                        <p class="user-score">Community Score</p>
                        <p class="user-score">${element.vote_average}</p>
                      </div>
            
                      <div class="release-box">
                        <p class="release-date">Released</p>
                        <p class="release-date">${element.release_date}</p>
                      </div>
            
                      <div class="movie-genres">
                      <div>${genreDisplay}</div>
                      </div>
                    </div>
                  </div>`
                )
            });
        } catch (error) {
            console.log(error);
        }
};

init();
const genreList = async function(){

}

/* <li class="movie-genre">Sci-Fi</li>
                        <li class="movie-genre">Fantasy</li>
                        <li class="movie-genre">Horror</li> */