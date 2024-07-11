import {Switch, Route} from 'react-router-dom'
import Popular from './components/Popular'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import MovieDetails from './components/MovieDetails'

const App = () => (
  <Switch>
    <Route exact path="/" component={Popular} />
    <Route exact path="/top-rated" component={TopRated} />
    <Route exact path="/upcoming" component={Upcoming} />
    <Route exact path="/movie-details/:id" component={MovieDetails} />
  </Switch>
)

export default App
