import Form from "../Form";
import Illustration from "../Illustration";
import classes from '../../styles/Login.module.css'
import Textinput from "../Textinput";
import Button from "../Button";

export default function Login(){
    return(
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration/>
                <Form className={`${classes.login}`}>
                   
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
                    <Button><span>Submit Now</span></Button>
                    <div className="info">
                    Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>
                
                </Form>
            </div>

        </>
    )
}