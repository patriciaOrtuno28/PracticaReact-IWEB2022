import {Button} from 'react-bootstrap';
import "./Quiz.css";

export default function Shortcuts (props) {
    let shortcuts = props.quizzes.map((q, i) => {
        return <Button id="btn_shortcut" onClick={() => {props.setCurrentQuiz(i)}}>{i+1}</Button>
    });
    return <div id="container_shortcuts">{shortcuts}</div>
}