import {Component} from 'react'
import Header from '../Header'
import MovieItem from '../MovieItem'
import './index.css'

class TopRated extends Component {
  state = {
    topratedList: [],
  }

  componentDidMount() {
    this.getTopRatedMovies()
  }

  getTopRatedMovies = async () => {
    const API_KEY = '2b6bed2ca7d926b4afadfb343eebefad'
    const topRatedUrl = ` https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`

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

  render() {
    const {topratedList} = this.state

    return (
      <>
        <Header />
        <div className="TopRatedBg">
          <h1 className="TopRatedHead">Top Rated</h1>
          <ul className="TopRatedUl">
            {topratedList.map(eachUpcoming => (
              <MovieItem key={eachUpcoming.id} movieDetails={eachUpcoming} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default TopRated
