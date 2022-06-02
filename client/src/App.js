import style from './App.module.css';
import { Route } from "react-router-dom";
import Nav from './components/navbar/Nav';
import CreateActivity from './components/createActivity/CreateActivity';
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import DetailCountry from './components/detailCountry/DetailCountry';

function App() {
  return (
    <div >
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route path='/'>
        <div >
          <Nav />
        </div>
      </Route>
      <Route exact path='/home'>
        <div className={style.article}>
          <Home />
        </div>
      </Route>
      <Route path='/activity'>
        <CreateActivity />
      </Route>
      <Route exact path='/detail/:pais' >
        <DetailCountry />
      </Route>
    </div>
  );
}

export default App;
