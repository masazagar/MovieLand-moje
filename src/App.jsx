import { useEffect, useState } from 'react'
import './App.css'
import "./index.css"
import MovieCard from './MovieCard'

const API_URL = "http://www.omdbapi.com?apikey=e56523f1"


function App() {
  //primer filma
  const movie1= [{
    id: 1,
    title: "Superman The Movie",
    poster: "https://image.tmdb.org/t/p/original/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg",
    year: 1978 
  }]

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState(" ")
  //API call
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  
  useEffect(() => {
    searchMovies('Batman')
  }, [])
  return (
    <>
      <header>
        <input 
        className='search-bar'
        type="text" 
        placeholder="Search for a movie"
        value ={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
        <button onClick = {() => searchMovies(search)}>🧐</button>
      </header>

      <main>
    <div className='movies'>
        {
        movies.length > 0 
        ? (
        <ul className="movie-list">
        {
         movies.map((movie) => (
          <>
          <li className='container'>
          <img 
          className="img-poster" 
          src={movie.Poster}></img>
          <p className="movie-title">{movie.Title}</p>
          <p className="movie-year">{movie.Year}</p>
          </li>
          </>
         )
          )
           }</ul>
    ) : (
        <p>No movies found</p>
        )
        }

</div>
      </main>
    </>
  )
}

export default App
