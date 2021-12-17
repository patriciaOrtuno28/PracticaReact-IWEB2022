import React, { Component } from 'react';
import { LangContext } from './LangContext';
import eng from "./en.json";
import esp from "./esp.json";

class Context extends Component {
  state = {
    lang: esp,
  };

  toggleLang = () => {
    this.setState(state => ({
      lang: state.lang === eng ? esp : eng
    }))
  }

  static contextType = LangContext;

  render() {
    return (
      <LangContext.Provider value={this.state.lang}>
        <button onClick={this.toggleLang}>Español / Inglés</button>
      </LangContext.Provider>
    );
  }
}

export default Context;