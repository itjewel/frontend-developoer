import { NavLink } from 'react-router-dom';
import Button from './Button';
import CheckBox from './CheckBox';
import Form from './Form';
import TextInput from './TextInput';
export default function SignUpForm() {
    return (
        <Form className="signup form" action="#">
            <TextInput type="text" placeholder="Enter name" icon="person" />
            <TextInput type="email" placeholder="Enter email" icon="alternate_email" />
            <TextInput type="passsword" placeholder="Enter password" icon="lock" />
            <TextInput type="passsword" placeholder="Confirm password" icon="lock_clock" />
            <CheckBox text="I agree to the Terms & Conditions" />

            <Button>
                <span>Submit now</span>
            </Button>

            <div className="info">
                Already have an account? <NavLink to="/login">Login</NavLink> instead.
            </div>
        </Form>);
}