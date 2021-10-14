import React from 'react';
import {Form,Button} from "react-bootstrap";

const SingUp = () => {
    return (
        <div className="singupbg">
            <h3>Sing up</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Sing up
                </Button>
                <Button variant="danger" type="submit" className="w-100 mt-3">
                    Sing In
                </Button>
            </Form>
        </div>
    );
};

export default SingUp;