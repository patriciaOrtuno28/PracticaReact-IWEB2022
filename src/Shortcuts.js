import {Button} from 'react-bootstrap';

export default function Shortcuts (props) {
    let shortcuts = () => {
        for (var i=1; i<props.nQuizzes; i++){
            let mybtn = () => {<Button>i</Button>} 
            return <div>{mybtn}</div>
        }
    }

    return <div id="container_shortcuts">
        <h2>Hola Sobri</h2>
        {shortcuts}
        </div>
}