import {Component} from 'react'
import MovieItem from '../MovieItem'
import './index.css'

class SearchedResults extends Component {
  state = {
    searchList: [],
  }

  componentDidMount() {
    this.getSearchResults()
  }

  getSearchResults = async () => {
    const {searchInput} = this.props
    const MOVIE_NAME = searchInput
    const API_KEY = '2b6bed2ca7d926b4afadfb343eebefad'
    const searchedMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${MOVIE_NAME}&page=1`
    const options = {
      method: 'GET',
    }
    const response = await fetch(searchedMovieUrl, options)
    const data = await response.json()

    const updatedSearchList = data.results.map(each => ({
      id: each.id,
      posterPath: each.poster_path,
      title: each.title,
      rating: each.vote_average,
    }))

    this.setState({
      searchList: updatedSearchList,
    })
  }

  render() {
    const {searchList} = this.state
    return (
      <>
        <div className="TopRatedBg">
          <h1 className="TopRatedHead">Searched Results</h1>
          <ul className="TopRatedUl">
            {searchList.map(each => (
              <MovieItem key={each.id} movieDetails={each} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default SearchedResults
