const squareStyle = {
    height: '100px',
    width: '100px'
}

export default function Square(props) {
    function squareClick(e) {
        if (props.value === '-') {
            props.boardClick(props.fila, props.columna)
        }
    }
    return (
        <button id="btn_square" style = {squareStyle} onClick={squareClick} className={props.value === '-' ? "clickable" : "noclickable"}>
            {props.value}
        </button>
    )
}