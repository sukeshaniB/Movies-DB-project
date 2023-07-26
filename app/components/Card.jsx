import Link from "next/link"
import MovieDetailsPage from "../movies/[id]/page"

function Card({ movie }) {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

    return (
        <div>
            <Link className="text-decoration-none" href={"/movies/" + movie.id}>
                <div className="card" style={{ width: '15rem' }}>
                    <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Title:{movie.title}</h5>
                        <p className="card-text overflow-y-auto" style={{ height: "150px" }}>Overview:{movie.overview}</p>
                        <div>Rating:  {movie?.vote_average} ⭐</div>
                        <div>Release:  {movie?.release_date}</div>
                        <div>Language: {movie?.original_language?.toUpperCase()}</div>
                        <div>Runtime: {movie?.runtime} MIN.</div>
                        <button type="button" data-id={movie.id}
                            className="favorite-btn btn btn-outline-info">
                            +
                        </button>

                    </div>

                </div>
            </Link>
        </div>
    )
}

export default Card