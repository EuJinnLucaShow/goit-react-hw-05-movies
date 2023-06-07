import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Home = React.lazy(() => import('./Home/Home'));
const Movies = React.lazy(() => import('./Movies/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route exact path="/movies/:movieId/cast" component={Cast} />
          <Route exact path="/movies/:movieId/reviews" component={Reviews} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
