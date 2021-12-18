import "./Quiz.css";
import {Button} from 'react-bootstrap';
import  {useState} from 'react';
import Shortcuts from "./Shortcuts";
import { LangContext } from './LangContext';

export default function Game (props) {
    let nullArray = new Array(props.nQuizzes).fill(false);
    const [answers, setAnswers] = useState(nullArray);
    var localScore = 0;

    const checkValid = () => {
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
    }

    const before = () => {
        checkValid();
        props.setCurrentQuiz(props.currentQuiz  - 1);
    }

    const next = () => {
        checkValid();
        props.setCurrentQuiz(props.currentQuiz  + 1);
    }

    const submit = () => {
        checkValid();
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
        return (<LangContext.Consumer>
            {lang =>
                <div id="container_gameGlobal">
                <div id="box1">
                    <Shortcuts quizzes={props.quizzes} setCurrentQuiz={props.setCurrentQuiz} checkValid={checkValid}/>
                </div>
                <div id="container_game">
                    <div id="container_questions_game">
                        <div id="container_img">
                            <img src={props.quiz.attachment ? props.quiz.attachment.url : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} id="img_quiz" onError={event => {
                                event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                                event.onerror = null
                            }}/>
                            <div id="container_img_text">
                                <img src={props.quiz.author.photo ? props.quiz.author.photo.url : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} id="img_author" onError={event => {
                                event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                                event.onerror = null
                            }}/>
                                <p id="text_author">{props.quiz.author.username ? props.quiz.author.username : 'Nombre no disponible.'}</p>
                            </div>
                        </div>
                        <div id="container_questions">
                            <h2 id="h2_nQuestion">{lang.game_question}{props.quiz.id}</h2>
                            <h3 id="h3_question">{props.quiz.question}</h3>
                            <label for="quiz_answer">{lang.game_insertAnswer}</label>
                            <input type="text" id="quiz_answer" name="quiz_answer"/>
                        </div>
                    </div>
                    <div id="container_btns">
                        <Button id="btn_quiz" onClick={before} disabled={props.currentQuiz==0}>{lang.btn_prev}</Button>
                        <Button id="btn_quiz" onClick={next} disabled={props.currentQuiz==props.nQuizzes-1}>{lang.btn_next}</Button>
                        <Button id="btn_quiz" onClick={submit}>{lang.btn_submit}</Button>
                    </div>
                </div>
            </div>
            }
        </LangContext.Consumer>);
    } else {
        return (<LangContext.Consumer>
            {lang =>
                <div id="container_playAgain">
                    <h2>{lang.game_score}{props.score}</h2>
                    <h3>{(parseInt(props.score)/parseInt(props.nQuizzes))*100}% {lang.game_correct}</h3>
                    <Button id="btn_quiz" onClick={playAgain}>{lang.game_playAgain}</Button>
                </div>
            }
        </LangContext.Consumer>);
    }
}