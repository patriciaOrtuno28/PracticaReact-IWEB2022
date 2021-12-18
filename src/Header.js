import "./TicTacToe.css";
import { LangContext } from './LangContext';

export default function Header (props) {
    return (
        <LangContext.Consumer>
            {lang =>
                <div id="container_header">
                    <h2 id="h2_header">
                        {lang.header_turn}{props.turno}
                    </h2>
                </div>
            }
        </LangContext.Consumer>
    )
}