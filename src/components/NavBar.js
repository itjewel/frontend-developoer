import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoImage from '../assets/imgages/unnamed.gif';
import classes from '../styles/NavBar.module.css';
const NavBar = () => {
    const redirect = useNavigate()
    const notify = (data) => toast(data);
    const logout = () => {
        localStorage.removeItem('accessStorage');
        redirect('/login')
    }
    async function notifyStatus() {
        let storage = JSON.parse(localStorage.getItem('accessStorage'));
        const data = {
            "name": "jewel",
            "email": (storage && storage.emailAddress),
            "repoUrl": "string",
            "message": "This is a test"
        }
        const config = {
            headers: { Authorization: `Bearer ${(storage && storage.accessToken)}` }
        };
        await axios.post("http://35.201.2.209:8000/notify", data, config).then(({ data }) => {
            notify(data)
        }).catch((error) => {
            notify('Invalid token')
        });
    }
    return (<>
        <nav className={classes.nav}>
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
                <NavLink to="/login">Login</NavLink>
                <button type="button" onClick={notifyStatus}>Notify</button>
                <ToastContainer />
                <button onClick={logout}><span className="material-icons-outlined" title="Logout"> logout </span></button>
            </div>

        </nav>

    </>
    );
}
export default NavBar;