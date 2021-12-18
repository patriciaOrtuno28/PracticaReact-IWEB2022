import './App.css';
import Menu from './Menu';
import TicTacToe from './TicTacToe';
import Home from './Home';
import Quiz from './Quiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import { LangContext } from './LangContext';
import eng from "./en.json";
import esp from "./esp.json";

class App extends Component {
  state = {
    lang: esp,
  };

  toggleLang = () => {
    this.setState(state => ({
      lang: state.lang === eng ? esp : eng
    }))
  }

  static contextType = LangContext;

  render () {
    return (
      <LangContext.Provider value={this.state.lang}>
        <Router>
          <Menu toggleLang={this.toggleLang}/>
          <div className="container mt-2" style={{ marginTop: 20 }}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/tictactoe" element={<TicTacToe/>}/>
              <Route path="/quiz" element={<Quiz/>}/>
            </Routes>
          </div>
        </Router>
      </LangContext.Provider>
    );
  }
}

export default App;
