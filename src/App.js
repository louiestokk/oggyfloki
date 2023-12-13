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
    <Route path="*" element={   <ErrorPage />} />
    <Route path="/app-oggyfloki" element={   <Game />} />
    <Route path="/oggyfloki-white-paper" element={   <WhitePaper />} />
    <Route path="/career-portal" element={   <Career />} />
    </Routes>
      </div>
 
    </div>
  );
}

export default App;
