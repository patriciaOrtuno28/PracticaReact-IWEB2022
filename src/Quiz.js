import React from "react";
import Game from "./Game";
import  {useState} from 'react';
import  {useEffect} from 'react';
import "./Quiz.css";
import axios from "axios";
import { LangContext } from './LangContext';
import {Button} from 'react-bootstrap';

export default function Quiz() {  
  // Inicialización de parámetros como Hooks
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizzesArray, setQuizzes] = useState([]);

  // Usamos axios por su bajo peso, rapidez en las peticiones y soporte de plataformas  
  const consultaAPI = async () => {
    await axios({
      method: 'GET',
      url: 'https://core.dit.upm.es/api/quizzes/random10wa?token=0a72635966eb3864d6fe'
    }).then(res => {    // Es una promesa -> .then
      setQuizzes(res.data);
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    consultaAPI();
  }, []);

  const resetGame = () => {
    setScore(0);
    setFinished(false);
    setCurrentQuiz(0);
    consultaAPI();
  }

  // Visualización
  return(
    <LangContext.Consumer>
        {lang =>
            <div>
              {
              quizzesArray.length >= 1 ? 
              <div id="container_quiz">
                <Game quizzes={quizzesArray} quiz={quizzesArray[currentQuiz]} currentQuiz={currentQuiz} setCurrentQuiz={setCurrentQuiz} nQuizzes={quizzesArray.length} setScore={setScore} score={score} setFinished={setFinished} finished={finished} resetGame={resetGame}/>
              </div>
               : <h2>No hay quizzes disponibles.</h2>
            }
            </div>
        }
    </LangContext.Consumer>
  );
}