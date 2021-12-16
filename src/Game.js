import "./Quiz.css";
import {Button} from 'react-bootstrap';

export default function Game (props) {
    return <div id="container_game">
        <div id="container_img">
            <img src={props.quiz.attachment.url} id="img_quiz"/>
        </div>
    </div>
}