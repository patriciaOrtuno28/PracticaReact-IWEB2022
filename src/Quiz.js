import React from "react";
import Game from "./Game";
import  {useState} from 'react';
import  {useEffect} from 'react';
import Shortcuts from './Shortcuts';
import "./Quiz.css";




export default function Quiz() {
  
    const [articulos, setArticulos] = useState([])
    useEffect(() => {
      fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=0a72635966eb3864d6fe")
        .then((response) => {
          console.log("a")
          return response.json()
        })
        .then((articulos) => {
          setArticulos(articulos)
        })
    }, [])
 console.log(articulos)
  
  // Inicialización de parámetros como Hooks
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizzesArray, setQuizzes] = useState([...articulos]);

  // Visualización
  return(
    <div id="container_quiz">
      <div id="box1">
        <Shortcuts nQuizzes={quizzesArray.length}/>
      </div>
      <div id="box2">
        <Game quiz={quizzesArray[currentQuiz]} currentQuiz={currentQuiz} setCurrentQuiz={setCurrentQuiz} nQuizzes={quizzesArray.length} setScore={setScore} score={score} setFinished={setFinished} finished={finished}/>
      </div>
    </div>
  );
}