import LoginImage from '../assets/imgages/login.svg';
import signupImage from '../assets/imgages/signup.svg';
export default function Illustration({ type }) {
    return (
        <div className="illustration" >
            {type === 'signup' ? <img src={signupImage} alt="Signup" />
                : <img src={LoginImage} alt="Login" />
            }
        </div >
    );
}