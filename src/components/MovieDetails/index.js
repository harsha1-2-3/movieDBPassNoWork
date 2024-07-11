import {Component} from 'react'
import Header from '../Header'
import './index.css'

class MovieDetails extends Component {
  state = {
    movieObj: {},
    castList: [],
    genresList: [],
  }

  componentDidMount() {
    this.getMovieDetails()
    this.getCastDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const MOVIE_ID = id
    const API_KEY = '2b6bed2ca7d926b4afadfb343eebefad'
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(movieDetailsUrl, options)
    const data = await response.json()
    const updatedObj = {
      backdropPath: data.backdrop_path,
      genres: data.genres,
      id: data.id,
      overview: data.overview,
      posterPath: data.poster_path,
      releaseDate: data.release_date,
      runtime: data.runtime,
      title: data.title,
      rating: data.vote_average,
    }

    this.setState({
      movieObj: updatedObj,
      genresList: updatedObj.genres,
    })
  }

  getCastDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const MOVIE_ID = id
    const API_KEY = '2b6bed2ca7d926b4afadfb343eebefad'
    const movieCastUrl = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(movieCastUrl, options)
    const data = await response.json()
    const castData = data.cast
    const updatedCastList = castData.map(each => ({
      castId: each.cast_id,
      character: each.character,
      name: each.name,
      profilePath: each.profile_path,
    }))
    this.setState({
      castList: updatedCastList,
    })
  }

  minsToHrs = mins => {
    const hrs = Math.floor(mins / 60)
    const balMins = mins % 60
    return `${hrs} hours ${balMins} minutes`
  }

  render() {
    const {castList, movieObj, genresList} = this.state
    const {
      backdropPath,
      overview,
      // posterPath,
      releaseDate,
      runtime,
      title,
      rating,
    } = movieObj
    console.log(genresList)
    return (
      <>
        <Header />
        <div className="MovieDetailsBg">
          <img
            className="MovieMainImg"
            src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
            alt="Movie"
          />
          <div className="DetailsCont">
            <h1 className="MovieName">{title}</h1>
            <div className="DetailCont">
              <h1 className="DetailHead">Description</h1>
              <p className="DetailPara">{overview}</p>
            </div>
            <div className="MovieDetailsCont">
              <div className="DetailCont">
                <h1 className="DetailHead">Rating</h1>
                <p className="DetailPara">{Math.floor(rating)}+</p>
              </div>
              <div className="DetailCont">
                <h1 className="DetailHead">Duration</h1>
                <p className="DetailPara">{this.minsToHrs(runtime)}</p>
              </div>
              <div className="DetailCont">
                <h1 className="DetailHead">Genre</h1>
                <ul className="DetailParaUl">
                  {genresList.map(e => (
                    <li key={e.id} className="DetailParaLi">
                      {e.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="DetailCont">
                <h1 className="DetailHead">Release Date</h1>
                <p className="DetailPara">{releaseDate}</p>
              </div>
            </div>
            <ul className="CastDetailsUl">
              {castList.map(each => (
                <li key={each.castId} className="CastDetailsLi">
                  <img
                    className="CastImg"
                    src={`https://image.tmdb.org/t/p/w500${each.profilePath}`}
                    alt={each.name}
                  />
                  <p className="DetailHead">{each.name}</p>
                  <p className="DetailPara">As {each.character}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default MovieDetails