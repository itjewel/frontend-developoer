import { NavLink } from 'react-router-dom';
import Button from '../Button';
import Illustration from '../Illustration';
import TextInput from '../TextInput';
export default function Login() {
    return (
        <div className="container">
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration type="login" />
                <form className="login form" action="#">
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <Button>
                        <span>Submit now</span>
                    </Button>

                    <div className="info">Don't have an account? <NavLink to="/signup">Signup</NavLink> instead.</div>
                </form>
            </div>
        </div>
    );
}