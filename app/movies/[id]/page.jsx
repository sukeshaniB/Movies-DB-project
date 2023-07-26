import { getMovieDetails, getSimilarMovies } from "@/utils/requests"

async function MovieDetailsPage({ params }) {
    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const movieDetails = await getMovieDetails(params.id);
    const similarMovies = await getSimilarMovies(params.id);

    return (
        <div className="my-4 mx-3">
            <div className="d-flex align-items-center">
                <div className="col-3">
                    <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="" />
                </div>
                <div className="mx-5">
                    <h3>{movieDetails.title}</h3>
                    <div className="d-flex">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                            <div>Language: {movieDetails?.original_language?.toUpperCase()}</div>
                            <div>Release: {movieDetails?.release_date}</div>
                            <div>Runtime: {movieDetails?.runtime} MIN.</div>
                            <div>Rating: {movieDetails?.vote_average} ⭐</div>


                        </div>

                    </div>
                    <div>
                        <p>{movieDetails.genres.map(genre => {
                            return <span className="mx-1 p-1 bg-dark text-white me-2 rounded" key={genre.id}>{genre.name}</span>
                        })}</p>
                    </div>
                    <p>Overview:{movieDetails.overview}</p>
                    <button type="button" data-id={movieDetails.id}
                        className="favorite-btn btn btn-outline-info">
                        +
                    </button>
                </div>
            </div>
            {/* Similar Movies */}
            <div className="my-3">
                <h2>Similar Movies</h2>
                <div className="d-flex flex-wrap gap-3">
                    {similarMovies.map(movie => {
                        return (
                            <div>
                                <img src={IMAGE_BASE_URL + movie.poster_path} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsPage