import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home'));
const Movies = React.lazy(() => import('./components/Movies'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails'));
const Cast = React.lazy(() => import('./components/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews'));

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
