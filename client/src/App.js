import style from './App.module.css';
import { Route } from "react-router-dom";
import Nav from './components/navbar/Nav';
import CreateActivity from './components/createActivity/CreateActivity';
import Home from './components/home/Home';

function App() {
  return (
    <div >
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
      <Route path='/countries'>
        <div ><h1>Countries</h1></div>
      </Route>
      <Route path='/activity'>
        <div ><h1>Actividades turisticas</h1></div>
        <CreateActivity />
      </Route>
    </div>
  );
}

export default App;
