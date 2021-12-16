import React from "react";
import { quizzes } from "./assets/mock-data";
import Game from "./Game";
import  {useState} from 'react';
import Shortcuts from './Shortcuts';
import "./Quiz.css";


export default function Quiz() {
  // Inicialización de parámetros como Hooks
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizzesArray, setQuizzes] = useState([...quizzes]);

  // Visualización
  return(
    <div id="container_quiz">
      <div id="box1">
        <Shortcuts quizzes={quizzesArray} setCurrentQuiz={setCurrentQuiz}/>
      </div>
      <div id="box2">
        <Game quiz={quizzesArray[currentQuiz]} currentQuiz={currentQuiz} setCurrentQuiz={setCurrentQuiz} nQuizzes={quizzesArray.length} setScore={setScore} score={score} setFinished={setFinished} finished={finished}/>
      </div>
    </div>
  );
}