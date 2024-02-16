export default function MovieCard({movie}) {
    return (
        <>
        <li className="poster-container">
        <img 
        className="img-poster" 
        src={movie.poster}></img>
        <p className="movie-title">{movie.title}</p>
        <p className="movie-year">{movie.year}</p>
        </li>
        </>
    )
}