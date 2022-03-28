import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HackingGame from './components/pages/HackingGame';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/hackinggame' exact element={<HackingGame />} />
          <Route path='/resume' exact element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
