import "./TicTacToe.css";

export default function Header (props) {
    return <div id="container_header">
        <h2 id="h2_header">
            Turno de {props.turno}
        </h2>
    </div>
}