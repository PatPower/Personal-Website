import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HackingGame from './components/pages/HackingGame';
import Home from './components/pages/Home'
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/hackinggame' exact element={<HackingGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
