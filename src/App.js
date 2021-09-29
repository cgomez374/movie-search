import './App.css';
import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search'
import Showcase from './components/Showcase/Showcase';
import PopularMovies from './components/PopularMovies/PopularMovies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
 

  return (
    <Router>
      <main>
        <Navigation />
        <Switch>
          <Route exact path='/' >
            <Showcase />
            <PopularMovies />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/:id'>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
