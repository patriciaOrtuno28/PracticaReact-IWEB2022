import "./Menu.css";
import { NavLink } from 'react-router-dom';
import { LangContext } from './LangContext';


const Menu = (props) => {
    return (<nav className="nav nav-tabs" role="tablist">
        <NavLink to="/">{props.home}</NavLink>
        <NavLink to="/tictactoe">TicTacToe</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
    </nav>);
};
export default Menu;