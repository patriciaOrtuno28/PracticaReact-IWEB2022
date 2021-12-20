import "./Menu.css";
import { NavLink } from 'react-router-dom';
import { LangContext } from './LangContext';

const Menu = (props) => {
    return (<LangContext.Consumer>
        {lang =>
            <nav className="nav nav-tabs" role="tablist">
                <NavLink to="/">{lang.menu_home}</NavLink>
                <NavLink to="/tictactoe">TicTacToe</NavLink>
                <NavLink to="/quiz">Quiz</NavLink>
                <button onClick={props.toggleLang} id="btn_language">Español / English</button>
            </nav>
        }
        </LangContext.Consumer>);
};
export default Menu;