import {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchedResults from '../SearchedResults'
import './index.css'

class Header extends Component {
  state = {
    searchInput: '',
    isSearch: false,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickViewBtn = () => {
    this.setState({isSearch: true})
  }

  render() {
    const {searchInput, isSearch} = this.state
    return (
      <>
        <nav className="HeaderBg">
          <h1 className="LogoHead">MovieDB</h1>
          <div className="InputCont">
            <input
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="InputBox"
              placeholder="Search..."
              type="search"
            />
            <button
              type="button"
              onClick={this.onClickViewBtn}
              className="SearchBtn"
            >
              Search
            </button>
          </div>
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
        {isSearch && <SearchedResults searchInput={searchInput} />}
      </>
    )
  }
}
export default Header
