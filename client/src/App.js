import './App.css';
import { Route } from "react-router-dom";
import Nav from './components/navbar/Nav';
import CreateActivity from './components/createActivity/CreateActivity';
import Home from './components/home/Home';

function App() {
  return (
    <div className='App'>
      <Route path='/'>
        <div >
          <Nav />
        </div>
      </Route>
      <Route exact path='/home'>
        <div ><h1>Henry Countries</h1></div>
        <Home />
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
