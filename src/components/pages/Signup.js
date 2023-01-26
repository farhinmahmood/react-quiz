import { Link } from "react-router-dom";
import Form from "../Form";
import Illustration from "../Illustration";
import classes from '../../styles/Signup.module.css'
import Textinput from "../Textinput";
import Checkbox from "../Checkbox";
import Button from "../Button";

export default function Signup(){
    return(
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration/>
                <Form className={`${classes.signup}`}>
                    <Textinput 
                        type="text"
                        placeholde="Enter name"
                        icon="person"
                    />
                    <Textinput 
                        type="text"
                        placeholde="Enter email"
                        icon="alternate_email"
                    />
                    <Textinput 
                        type="password"
                        placeholde="Enter password"
                        icon="lock"
                    />
                     <Textinput 
                        type="password"
                        placeholde="Confirm password"
                        icon="lock_clock"
                    />
                    <Checkbox text="I agree to the Terms &amp; Conditions"/>
                    <Button><span>Submit now</span></Button>
                    <div className="info">
                         Already have an account? <Link to="/login">Login</Link> instead.
                     </div>
                
                </Form>
            </div>

        </>
    )
}