import React, {useState} from 'react';
import {Alert, Badge, Button, Container, Form} from "react-bootstrap";
import {addFormDataInDB} from "../../functions/FeedbackForm/addFormDataInDB";
import {useUserAuth} from "../../contexts/UserAuthContext";
import {getLang} from "../../functions/Lang/getLang";

const FeedbackForm = () => {

    const { user } = useUserAuth();

    //data form
    const [email,setEmail] = useState((user && user.email) || '');
    const [message,setMessage] = useState('');
    const [cooperation,setCooperation] = useState(false);

    //message after send
    const [sendMess,setSendMess] = useState({err:false,message:false})

    //send form data in database
    const handleSend = (event) => {
        event.preventDefault();
        addFormDataInDB(email,message,cooperation)
            .then(() => setSendMess({err: false, message: "Форма успешно отправлена."}))
            .catch(() => setSendMess({err: true, message: "Ошибка отправки формы."}))
            .finally(setTimeout(() => setSendMess({err:false,message:false}),5000))
        setEmail('')
        setMessage('')
        setCooperation(false)
    }

    return (
        <Container className={"my-2"}>

            <Form onSubmit={handleSend} className={"w-50 p-3 border"} style={{borderRadius:10}}>
                <h5>
                    <Badge>
                        {getLang() === 'rus' && "Вы можете задать нам свои вопросы"}
                        {getLang() === 'eng' && "You can ask us your questions"}
                    </Badge>
                </h5>

                <Form.Group className="mb-3">
                    <Form.Label>
                        {getLang() === 'rus' && "Введите вашу почту"}
                        {getLang() === 'eng' && "Enter your email address"}
                    </Form.Label>

                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size={"sm"}
                        type="email"
                        required
                        placeholder={getLang() === "rus" ? "Обязательно к заполнению" : "Required to fill out"}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>
                        {getLang() === 'rus' && "Введите ваше сообщение"}
                        {getLang() === 'eng' && "Enter your message"}
                    </Form.Label>
                    <Form.Control
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        size={"sm"}
                        as={"textarea"}
                        placeholder={
                            getLang() === "rus" ?
                                "Если вы не заполните текст заявки, то мы сами напишем вам на почту.":
                                "If you do not fill out the text of the application, we will write to you by e-mail."
                            }
                    />
                </Form.Group>

                <Form.Check
                    className={"mb-3 small"}
                    type="checkbox"
                    label={
                        getLang() === "rus" ?
                            "Отметьте, если вы хотите предложить нам сотрудничество.":
                            "Check if you'd like to offer us a partnership."
                        }
                    checked={cooperation}
                    onChange={() => setCooperation(!cooperation)}
                />

                <Alert
                    className={"my-2 small p-2"}
                    variant={sendMess.err ? "danger" : "success"}
                    hidden={!sendMess.message}
                >
                    {sendMess.message}
                </Alert>

                <Button size={"sm"} variant="outline-primary" type="submit">
                    {getLang() === "rus" ? "Отправить" : "Send"}
                </Button>
            </Form>
        </Container>
    );
};

export default FeedbackForm;
