import './App.css';
import Menu from './Menu';
import TicTacToe from './TicTacToe';
import Home from './Home';
import Quiz from './Quiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Context from './Context';

function App() {
  return (
    <Router>
      <Menu />
      <div className="container mt-2" style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tictactoe" element={<TicTacToe/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/context" element={Context} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
