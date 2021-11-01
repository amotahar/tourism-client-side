import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
const Login = () => {
    const { signInWithGoogle,} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    const handelGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirectUrl)
            }).catch((error) => {

            });
    }
    
    const { signInWithGitHub} = useAuth();

    // const location = useLocation();
    // const history = useHistory();
    // const redirectUrl = location.state?.from || '/home';

    // github is optional addition
    const handelGitHubLogIn = () => {
        signInWithGitHub()
            .then((result) => {
                history.push(redirectUrl)
            }).catch((error) => {

            });
    }

    return (
        <Container>
            <div className="login">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Google Sign In</Card.Title>
                        <Button variant="warning text-white" onClick={handelGoogleLogIn}><i className="fab fa-google"></i> Google Sign In</Button>  <br /> <b>Or</b> <br />

                        <Button variant="warning text-white" onClick={handelGitHubLogIn}><i className="fab fa-google"></i> GitHub Sign In</Button>
                    </Card.Body>
                </Card>

                
            </div>
        </Container>
    );
};

export default Login;