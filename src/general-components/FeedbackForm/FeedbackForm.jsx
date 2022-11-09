import React from 'react';
import {Badge, Button, Container, Form} from "react-bootstrap";

const FeedbackForm = () => {
    return (
        <Container className={"my-2"}>

            <Form className={"w-50 p-3 border"} style={{borderRadius:10}}>
                <h5><Badge>Вы можете задать нам свои вопросы</Badge></h5>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Введите вашу почту или номер телефона</Form.Label>
                    <Form.Control
                        size={"sm"}
                        type="text"
                        required
                        placeholder={"Обязательно к заполнению"}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Введите ваше сообщение</Form.Label>
                    <Form.Control
                        size={"sm"}
                        as={"textarea"}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default FeedbackForm;
