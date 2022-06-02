import { NavLink } from 'react-router-dom';
import logoImage from '../assets/imgages/unnamed.gif';
import classes from '../styles/NavBar.module.css';
const NavBar = () => {
    return (<nav className={classes.nav}>
        <ul>
            <li>
                <NavLink to="/" className={classes.brand}>
                    <img src={logoImage} alt="meldCX" />
                    <h3>meldCX</h3>
                </NavLink>
            </li>
        </ul>
        <div className="account">
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/">Notify</NavLink>
            <NavLink to="/login"><span className="material-icons-outlined" title="Logout"> logout </span></NavLink>
        </div>
    </nav>);
}
export default NavBar;