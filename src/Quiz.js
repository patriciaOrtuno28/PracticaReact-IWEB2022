import React from "react";
import { quizzes } from "./assets/mock-data";
import Game from "./Game";
import  {useState} from 'react';

export default function Quiz(props) {
  // Inicialización de parámetros como Hooks
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizzes, setQuizzes] = useState([...quizzes]);


  // Visualización
  return(
    <div id="container_quiz">
      <Game quiz={quizzes[currentQuiz]}/>
    </div>
  );
}