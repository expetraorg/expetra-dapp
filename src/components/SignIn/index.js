import React, { useState } from 'react'
import { useNavigate, redirect } from 'react-router-dom'
import { Alert } from "react-bootstrap"
import { useUserAuth } from '../../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from '../../globalStyles'
import { Container, FormS, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text } from './SignInElements'

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { logIn } = useUserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            // redirect('/home')
            navigate('/home');
        } catch (err) {
            setError("Incorrect email address or password, please try again");
        }
    }

    const cancelCourse = () => { 
        document.getElementById("create-course-form").reset();
    }


    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <FormS onSubmit={handleSubmit} id="signin_form">
                            <FormH1>Sign in to your account</FormH1>
                            {error && <Alert variant="danger">{error.valueOf()}</Alert>}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required onChange={(e) => setEmail(e.target.value)}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required onChange={(e) => setPassword(e.target.value)}/>
                            <Button primary big type='submit'>sign in</Button>
                            {/* <Text>Forgot password</Text> */}
                        </FormS>
                    </FormContent>
                </FormWrap>
            </Container>
         </>
    )
}

export default SignIn