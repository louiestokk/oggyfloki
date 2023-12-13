import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import Game from './pages/Game';
import WhitePaper from './pages/WhitePaper';
import ErrorPage from './pages/ErrorPage';
import Career from './pages/Career';
const App=()=> {
  return (
    <div className="App">
      <div>
      <Routes>
    <Route path="/" element={   <Home />} />
    <Route path="/career" element={   <Career />} />
    <Route path="*" element={   <ErrorPage />} />
    <Route path="/app-oggyfloki" element={   <Game />} />
    <Route path="/oggyfloki-white-paper" element={   <WhitePaper />} />
    </Routes>
      </div>
 
    </div>
  );
}

export default App;
