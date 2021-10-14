import React from 'react';
import {Button} from "react-bootstrap";
import { FaFacebookSquare,FaGoogle ,FaTwitterSquare,FaMobileAlt} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import UseAuth from "../Hooks/UseAuth";
const SocialLogin = () => {
        const {signInUsingGoogle,singInUsingGithub,singInusingFaceboo}=UseAuth();
        const handleGooglLogin=()=>{
                signInUsingGoogle()
                    .then(result=>{
                            console.log(result);
                    })
        }
        const handleGihubLogin=()=>{
            singInUsingGithub();
        }
        const handlefacebokLogin=()=>{
            singInusingFaceboo();
        }

    return (
        <div className="sociallogin">

            <Button variant="primary" className='w-100' onClick={handlefacebokLogin}><span ><FaFacebookSquare className="icon"/> Facebook</span></Button>
            <br/>
            <br/>
            <Button variant="danger" className='w-100' onClick={handleGooglLogin}><span ><FaGoogle className="icon"/> Google</span></Button>
            <br/>
            <br/>
            <Button variant="secondary" className='w-100' onClick={handleGihubLogin}><span ><BsGithub className="icon"/> Github </span></Button>
            <br/>
            <br/>
            <Button variant="primary" className='w-100'><span ><FaTwitterSquare className="icon"/> Twitter </span></Button>

            <br/>
            <br/>
            <Button variant="success" className='w-100'><span ><FaMobileAlt className="icon"/> Phone </span></Button>



        </div>
    );
};

export default SocialLogin;