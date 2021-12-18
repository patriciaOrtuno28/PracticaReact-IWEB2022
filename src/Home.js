import React from "react";
import "./Home.css";
import { LangContext } from './LangContext';

export default function Home () {
  return (
    <LangContext.Consumer>
      {lang =>
        <div id="container_home">
          <h1 id="h1_home">{lang.home_welcome}</h1>
          <h2 id="h2_home">{lang.home_subtitle}</h2>
          <p>{lang.home_text}</p>
          <div class="footer">
            <div class="footer_contents">
              <b>IWEB 2021</b>
              &emsp;
              Daniel Sanz Sobrino
              &emsp;
              Patricia Ortuño Otero
            </div>
          </div>
      </div>
      }
    </LangContext.Consumer>
  )
}