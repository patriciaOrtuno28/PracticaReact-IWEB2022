import {Button} from 'react-bootstrap';
import "./Quiz.css";

export default function Shortcuts (props) {
    let shortcuts = props.quizzes.map((q, i) => {
        console.log(q);
        return <Button id="btn_shortcut" onClick={() => {props.setCurrentQuiz(i)}}>{i}</Button>
    });
    return <div id="container_shortcuts">{shortcuts}</div>
}