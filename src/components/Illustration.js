import LoginImage from '../assets/imgages/login.svg';
;
export default function Illustration({ type }) {
    return (
        <div className="illustration" >
            {type === 'login' && (
                <img src={LoginImage} alt="Login" />
            )
            }
        </div >
    );
}