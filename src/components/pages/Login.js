import Illustration from '../Illustration';
import LoginForm from "../LoginForm";
export default function Login() {
    return (
        <div className="container">
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration type="login" />
                <LoginForm />
            </div>
        </div>
    );
}