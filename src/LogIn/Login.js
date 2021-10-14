import React from 'react';
import './Llgin.css'
import useFirebase from "../Hooks/useFirebase";
import {Row,Col,Container} from "react-bootstrap";
import SingUp from "./SingUp";
import SocialLogin from "./SocialLogin";

const Login = () => {
const {user,signInUsingGoogle}=useFirebase();
    const handleGoogleLogin = () => {


        signInUsingGoogle()
            .then(result => {
                console.log(result);

            }).catch((error)=>{
                console.log(error)
        })
    }

    return (
        <Container className="mt-5 pt-5 bg-white p-5">
            <Row>

                <Col sm={6}><SocialLogin></SocialLogin></Col>
                <Col sm={6}><SingUp></SingUp></Col>
            </Row>

        </Container>
    );
};

export default Login;