import {Link, withRouter} from 'react-router-dom'

import SearchMoviesContext from '../../context/SearchMoviesContext'

import './index.css'

const NavBar = props => {
  const renderSearchBar = () => (
    <SearchMoviesContext.Consumer>
      {value => {
        const {
          onTriggerSearchingQuery,
          onChangeSearchInput,
          searchInput,
        } = value

        const onChangeHandler = event => onChangeSearchInput(event.target.value)

        const onSearchHandler = event => {
          event.preventDefault()
          const {history} = props
          onTriggerSearchingQuery()
          history.push(`/search`)
        }

        return (
          <div className="InputCont">
            <input
              onChange={onChangeHandler}
              value={searchInput}
              className="InputBox"
              placeholder="Search..."
              type="search"
            />
            <button
              type="button"
              onClick={onSearchHandler}
              className="SearchBtn"
            >
              Search
            </button>
          </div>
        )
      }}
    </SearchMoviesContext.Consumer>
  )

  return (
    <nav className="HeaderBg">
      <h1 className="LogoHead">movieDB</h1>
      {renderSearchBar()}
      <ul className="LinksCont">
        <li>
          <Link to="/" className="Link">
            Popular
          </Link>
        </li>
        <li>
          <Link to="/top-rated" className="Link">
            Top Rated
          </Link>
        </li>
        <li>
          <Link to="/upcoming" className="Link">
            Upcoming
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(NavBar)
