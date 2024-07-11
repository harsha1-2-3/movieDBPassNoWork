import {Component} from 'react'
import Header from '../Header'
import MovieItem from '../MovieItem'
import './index.css'

class Upcoming extends Component {
  state = {
    upcomingList: [],
  }

  componentDidMount() {
    this.getUpcomingMovies()
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
    const {upcomingList} = this.state

    return (
      <>
        <Header />
        <div className="TopRatedBg">
          <h1 className="TopRatedHead">Upcoming</h1>
          <ul className="TopRatedUl">
            {upcomingList.map(eachUpcoming => (
              <MovieItem key={eachUpcoming.id} movieDetails={eachUpcoming} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default Upcoming
