
import Illustration from '../Illustration';
import SignUpForm from '../SignUpForm';
export default function SignUp() {
    return (
        <div className="container">
            <h1>Create an account</h1>
            <div className="column">
                <Illustration type="signup" />
                <SignUpForm />
            </div>
        </div>
    );
}