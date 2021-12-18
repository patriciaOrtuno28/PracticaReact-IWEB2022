import React from "react";
import "./TicTacToe.css";
import  {useState} from 'react';
import Header from './Header';
import Board from './Board';
import {Button} from 'react-bootstrap';
import { LangContext } from './LangContext';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default function TicTacToe(props) {
  const [turno, setTurno] = useState(PLAYERX);
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ])

  const [moves, setMoves] = useState(0);

  const appClick = (i, j) => {
    console.log(`Click en ${i}, ${j}`);
    let newValues = JSON.parse(JSON.stringify(values));
    newValues[i][j] = turno === PLAYERX ? 'X' : '0';
    setValues(newValues);
    setTurno(turno === PLAYERX ? PLAYER0 : PLAYERX);
    let newMoves = moves+1;
    setMoves(newMoves);
  }

  const reset = () => {
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
    setMoves(0);
    setTurno(PLAYER0);
  }

return(
  <LangContext.Consumer>
    {lang =>
      <div id="container_tictactoe">
        <Header turno={turno}/>
        <Board turno={turno} values={values} appClick={appClick}/>
        <h2 id="h2_tictactoe">{lang.ttt_nMoves}{moves}</h2>
        <Button onClick={reset} variant="success" id="btn_reset">{lang.ttt_reset}</Button>
      </div>
    }
  </LangContext.Consumer>
)

}
