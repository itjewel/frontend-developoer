import { NavLink } from 'react-router-dom';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';
const LoginForm = () => {
    return(<Form className="login form" action="#">
    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
    <TextInput type="password" placeholder="Enter password" icon="lock" />
    <Button>
        <span>Submit now</span>
    </Button>

    <div className="info">Don't have an account? <NavLink to="/signup">Signup</NavLink> instead.</div>
    </Form>);
}

export default LoginForm;