import { genre } from "./genre";
import { DOMSelectors } from "./DOM";

/*   const found = genre.filter((element) => element.id ===27).map((e)=> e.name);
  console.log(found); */

const apiKey = "ce2451628f94a825ae7f08aa5d55345e";
const query = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=10000&vote_average.gte=8`;

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