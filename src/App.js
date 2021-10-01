import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Resturant from './components/Resturant/Resturant';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/resturant">
            <Resturant></Resturant>
          </Route>
          <Route path="/resturant/:itemId">
            <MealDetails></MealDetails>
          </Route>
          <Route path="/about-us">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
