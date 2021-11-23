const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=44f407669b7845cae76ffcb1f548f3ce&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=44f407669b7845cae76ffcb1f548f3ce&query="';

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}
