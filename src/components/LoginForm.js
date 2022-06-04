import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';
const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    async function loginHandle(e) {
        e.preventDefault();
        try {
            setError("");
            const data = { email: email, password: password }
            await axios.post("http://35.201.2.209:8000/login", data).then((response) => {
                setError("");
                const storeData = {
                    accessToken: response.data,
                    emailAddress: email
                }
                localStorage.setItem("accessStorage", JSON.stringify(storeData));
                return navigate("/");
            })
        } catch (error) {
            setError("Login Faild")
        }
    }
    return (<Form className="login form" action="#" onSubmit={loginHandle}>
        <TextInput type="text" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button>
            <span>Submit now</span>
        </Button>
        {error && <p className='error'>{error}</p>}

    </Form>);
}

export default LoginForm;