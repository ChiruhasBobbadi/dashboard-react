import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";



import axios from "axios";
import {useState} from "react";
import {Alert} from "react-bootstrap";


const FormView = ()=> {

    const navigate = useNavigate();

let mes=false;
let errorMessage="";
const [error, setError] = useState(mes);

const [message, setMessage] = useState(errorMessage);

    const submitHandler = async(event)=>{

        event.preventDefault();

        const email = event.target.email.value;
        const pass = event.target.password.value;

        await authenticate(email,pass)

    }

    const authenticate = async(email, pass)=>{
       const response = await axios.post("http://localhost:4000/login",{
            email:email,
            password:pass
        });

       const data = response.data;

       if(data.status===200){
           // go to home

           sessionStorage.setItem('userId', data.userId);
           sessionStorage.setItem('userName', data.name);
           console.log(data.name);
           if(data.isAdmin)
               navigate("/addUser");
           else
             navigate("/home");
       }else{
           // display error.
            setMessage(response.data.message);
           setError(true);
       }

    }

    const displayError = (flag)=>{
        if(flag)
            return  <Container style={{marginTop:"5%"}}>
                <Alert key='danger' variant='danger'>
                    {message}
                </Alert>
            </Container>
        else <> </>
    }


    return (
        <Container style={{marginTop:'10em'}}>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"/>
                </Form.Group>
                {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                {/*</Form.Group>*/}
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>

            {displayError(error,message)}

        </Container>

    );
}

export default FormView;
