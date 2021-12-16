import Square from "./Square";

export default function Board(props) {
    let board = props.values.map((row, i) => {
        console.log(row)
        let myrow = row.map((col, j) => {
            return <Square value={col} boardClick={props.appClick} fila={i} columna={j}></Square>
        })
        return <div>{myrow}</div>
    });
    return <div>{board}</div>
}