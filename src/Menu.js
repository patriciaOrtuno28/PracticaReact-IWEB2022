import "./Menu.css";
import { NavLink } from 'react-router-dom';
import { LangContext } from './LangContext';

const Menu = (props) => {
    return (<nav className="nav nav-tabs" role="tablist">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tictactoe">TicTacToe</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <button onClick={props.toggleLang} id="btn_language">Español / English</button>
    </nav>);
};
export default Menu;