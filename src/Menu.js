import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (<nav className="nav nav-tabs" role="tablist">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tictactoe">TicTacToe</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
    </nav>);
};
export default Menu;