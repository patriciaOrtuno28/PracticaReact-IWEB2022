import "./Menu.css";
import { NavLink } from 'react-router-dom';
import Context from "./Context";

const Menu = () => {
    return (<nav className="nav nav-tabs" role="tablist">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tictactoe">TicTacToe</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <Context/>
    </nav>);
};
export default Menu;