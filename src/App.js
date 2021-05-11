import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Game from './Components/Game';
import Statistics from './Components/Statistics';
import Settings from './Components/Settings';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Route exact path="/" >
          <Game />
        </Route>
        <Route path="/statistics" >
          <Statistics />
        </Route>
        <Route path="/settings" >
          <Settings />
        </Route>
      </main>
    </div>
  );
}

export default App;
