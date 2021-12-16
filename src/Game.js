import "./Quiz.css";
import {Button} from 'react-bootstrap';
import  {useState} from 'react';

export default function Game (props) {
    let nullArray = new Array(props.nQuizzes).fill(false);
    const [answers, setAnswers] = useState(nullArray);
    var localScore = 0;

    const before = () => {
        let inputValue = document.getElementById("quiz_answer").value;
        if (inputValue.length>0){
            if (inputValue.toLowerCase() === props.quiz.answer.toLowerCase()){
                answers[props.currentQuiz] = true;
                setAnswers(answers);
            } else {
                answers[props.currentQuiz] = false;
                setAnswers(answers);
            }
        }
        document.getElementById("quiz_answer").value = "";
        props.setCurrentQuiz(props.currentQuiz  - 1);
    }

    const next = () => {
        let inputValue = document.getElementById("quiz_answer").value;
        if (inputValue.length>0){
            if (inputValue.toLowerCase() === props.quiz.answer.toLowerCase()){
                answers[props.currentQuiz] = true;
                setAnswers(answers);
            } else {
                answers[props.currentQuiz] = false;
                setAnswers(answers);
            }
        }
        document.getElementById("quiz_answer").value = "";
        props.setCurrentQuiz(props.currentQuiz  + 1);
    }

    const submit = () => {
        let inputValue = document.getElementById("quiz_answer").value;
        if (inputValue.length>0){
            if (inputValue.toLowerCase() === props.quiz.answer.toLowerCase()){
                answers[props.currentQuiz] = true;
                setAnswers(answers);
            } else {
                answers[props.currentQuiz] = false;
                setAnswers(answers);
            }
        }
        answers.forEach(function(element) {
            if (element) {
                localScore += 1;
            }
        });
        props.setScore(localScore);
        props.setFinished(true);
    }

    const playAgain = () => {
        props.setFinished(false);
        props.setScore(0);
        setAnswers(nullArray);
        props.setCurrentQuiz(0);
    }

    if (!props.finished) {
        return <div id="container_gameGlobal">
            <div id="container_game">
                <div id="container_img">
                    <img src={props.quiz.attachment.url} id="img_quiz"/>
                    <div id="container_img_text">
                        <img src={props.quiz.author.photo.url} id="img_author"/>
                        <p id="text_author">{props.quiz.author.username}</p>
                    </div>
                </div>
                <div id="container_questions">
                    <h2 id="h2_nQuestion">Question {props.quiz.id}</h2>
                    <h3 id="h3_question">{props.quiz.question}</h3>
                    <label for="quiz_answer">Introducir respuesta: </label>
                    <input type="text" id="quiz_answer" name="quiz_answer"/>
                </div>
            </div>
            <div id="container_btns">
                <Button onClick={before} disabled={props.currentQuiz==0}>Anterior</Button>
                <Button onClick={next} disabled={props.currentQuiz==props.nQuizzes-1}>Siguiente</Button>
                <Button onClick={submit}>Submit</Button>
            </div>
        </div>
    } else {
        return <div id="container_gameGlobal">
            <h2>Score: {props.score}</h2>
            <Button onClick={playAgain}>Volver a jugar</Button>
        </div>
    }
}