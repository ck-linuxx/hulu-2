const API_KEY = process.env.API_KEY

export default {
  fetchTrending:{
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=28`
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18749`,
  },
  fetchMystery: {
    title: "Mistery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/dicover/movie?api_key=${API_KEY}&with_genres=878`
  },
  fetchWesstern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/dicover/movie?api_key=${API_KEY}&with_genres=18778`
  },
}