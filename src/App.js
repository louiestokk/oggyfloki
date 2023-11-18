import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import Game from './pages/Game';
const App=()=> {
  return (
    <div className="App">
      <div>
      <Routes>
    <Route path="/" element={   <Home />} />
    <Route path="/app-oggyfloki" element={   <Game />} />
    </Routes>
      </div>
 
    </div>
  );
}

export default App;
