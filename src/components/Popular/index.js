import {Component} from 'react'
import Header from '../Header'
import MovieItem from '../MovieItem'
import './index.css'

class Popular extends Component {
  state = {
    popularList: [],
    topratedList: [],
    upcomingList: [],
  }

  componentDidMount() {
    this.getPopularMovies()
    this.getTopRatedMovies()
    this.getUpcomingMovies()
  }

  getPopularMovies = async () => {
    const API_KEY = '2b6bed2ca7d926b4afadfb343eebefad'
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    const options = {
      method: 'GET',
    }

    const response = await fetch(popularUrl, options)
    const popularData = await response.json()
    const updatedPopular = popularData.results.map(each => ({
      id: each.id,
      posterPath: each.poster_path,
      title: each.title,
      rating: each.vote_average,
    }))
    this.setState({popularList: updatedPopular})
  }

  getTopRatedMovies = async () => {
    const API_KEY = '2b6bed2ca7d926b4afadfb343eebefad'
    const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`

    const options = {
      method: 'GET',
    }

    const response = await fetch(topRatedUrl, options)
    const topratedData = await response.json()
    const updatedTopRated = topratedData.results.map(each => ({
      id: each.id,
      posterPath: each.poster_path,
      title: each.title,
      rating: each.vote_average,
    }))
    this.setState({topratedList: updatedTopRated})
  }

  getUpcomingMovies = async () => {
    const API_KEY = '2b6bed2ca7d926b4afadfb343eebefad'
    const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

    const options = {
      method: 'GET',
    }

    const response = await fetch(upcomingUrl, options)
    const upcomingData = await response.json()
    const updatedUpcoming = upcomingData.results.map(each => ({
      id: each.id,
      posterPath: each.poster_path,
      title: each.title,
      rating: each.vote_average,
    }))
    this.setState({upcomingList: updatedUpcoming})
  }

  render() {
    const {popularList, topratedList, upcomingList} = this.state
    return (
      <>
        <Header />
        <div className="PopularBg">
          <div className="Section">
            <h1 className="HeadP">Popular</h1>
            <ul className="MoviesUlP">
              {popularList.map(eachPopular => (
                <MovieItem key={eachPopular.id} movieDetails={eachPopular} />
              ))}
            </ul>
          </div>
          <div className="Section">
            <h1 className="Head">Top Rated</h1>
            <ul className="MoviesUl">
              {topratedList.map(eachTopRated => (
                <MovieItem key={eachTopRated.id} movieDetails={eachTopRated} />
              ))}
            </ul>
          </div>
          <div className="Section">
            <h1 className="Head">Upcoming</h1>
            <ul className="MoviesUl">
              {upcomingList.map(eachUpcoming => (
                <MovieItem key={eachUpcoming.id} movieDetails={eachUpcoming} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default Popular
