import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="MovieLi">
      <img className="MovieImg" alt={title} src={posterPath} />
      <div className="TitleVoteCont">
        <h1 className="Title">{title}</h1>
        <div className="VoteCont">
          <img
            className="VoteImg"
            alt="star"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BXcaq69fKCWDFtAjWJZlDzl0pU1dPZpfTw&usqp=CAU"
          />
          <p className="Vote">{Math.floor(voteAverage)}</p>
        </div>
      </div>
      <button type="button" className="ViewBtn">
        <Link className="ViewBtnLink" to={`/movie-details/${id}`}>
          View Details
        </Link>
      </button>
    </li>
  )
}

export default MovieCard
