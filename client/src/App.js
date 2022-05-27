import './App.css';
import { Route } from "react-router-dom";
import Nav from './components/navbar/Nav';
import CreateActivity from './components/createActivity/CreateActivity';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Route path='/'>
        <div className="App">
          <Nav />
        </div>
      </Route>
      <Route exact path='/home'>
        <div className="App"><h1>Henry Countries</h1></div>
        <Home />
      </Route>
      <Route path='/countries'>
        <div className="App"><h1>Countries</h1></div>
      </Route>
      <Route path='/activity'>
        <div className="App"><h1>Actividades turisticas</h1></div>
        <CreateActivity />
      </Route>
    </>
  );
}

export default App;
