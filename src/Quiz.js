import React from "react";
import Game from "./Game";
import  {useState} from 'react';
import  {useEffect} from 'react';
import Shortcuts from './Shortcuts';
import "./Quiz.css";
import axios from "axios";
import {quizzes} from './assets/mock-data'




export default function Quiz() {
  
  const [articulos, setArticulos] = useState([]);
  const temp = [];
  useEffect(() => {
    axios.get('https://core.dit.upm.es/api/quizzes/random10wa?token=0a72635966eb3864d6fe')
      .then((response) => {
        return response.data
      })
      .then((response) => response.json())
      .then((articulos) => {
        articulos.forEach(function(element){
          temp.append(element);
        });
      })
  });

  setArticulos(temp);
  console.log(articulos);
 
  
  // Inicialización de parámetros como Hooks
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizzesArray, setQuizzes] = useState(quizzes);

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