import MovieItem from '../MovieItem'
import Header from '../Header'
import Pagination from '../Pagination'
import PageContext from '../../context/PageContext'
import './index.css'

const SearchedResults = () => {
  const renderMoviesList = searchResponse => {
    const {results} = searchResponse
    if (!results) {
      return <div>Loading...</div>
    }

    return (
      <ul className="TopRatedUl">
        {results.map(each => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </ul>
    )
  }

  return (
    <PageContext.Consumer>
      {value => {
        const {searchResponse, onTriggerSearchBtn} = value
        return (
          <div className="TopRatedBg">
            <Header />
            <div className="TopRatedBg">
              <h1 className="TopRatedHead">Search Results</h1>
              {renderMoviesList(searchResponse)}
            </div>
            <Pagination
              totalPages={searchResponse.totalPages}
              apiCallBack={onTriggerSearchBtn}
            />
          </div>
        )
      }}
    </PageContext.Consumer>
  )
}

export default SearchedResults
