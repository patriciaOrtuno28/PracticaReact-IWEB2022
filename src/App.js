import './App.css';
import Menu from './Menu';
import TicTacToe from './TicTacToe';
import Home from './Home';
import Quiz from './Quiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LangContext } from './LangContext';
import es from "./lang/es.json";
import en from "./lang/en.json";
import  {useState} from 'react';

function App() {
  const [lang,setLang] = useState(es)
  const handleLanguageChange= () => {
    setLang(lang === es ? en : es)
  }
  return (
    <LangContext.provider value={lang} >
    <Router>
      <Menu home={lang.home} />
      <button onClick={handleLanguageChange}>en/es</button>
      <div className="container mt-2" style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tictactoe" element={<TicTacToe/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
      </div>
    </Router>
    </LangContext.provider>
  );
}

export default App;
