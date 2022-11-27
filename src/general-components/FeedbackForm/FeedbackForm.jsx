import React, {useState} from 'react';
import {Alert, Button, Container, Form} from "react-bootstrap";
import {addFormDataInDB} from "../../functions/FeedbackForm/addFormDataInDB";
import {useUserAuth} from "../../contexts/UserAuthContext";
import {getLang} from "../../functions/Lang/getLang";

//css
import "./FeedbackForm.css";
import {getTheme} from "../../functions/Theme/getTheme";
import GeneralInfo from "../GeneralInfo/GeneralInfo";

const FeedbackForm = ({showInfo}) => {

    const theme = getTheme(true);

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
            .then(() => setSendMess({err: false, message: "The form has been submitted SUCCESSFULLY."}))
            .catch(() => setSendMess({err: true, message: "Form submission ERROR."}))
            .finally(setTimeout(() => setSendMess({err:false,message:false}),1000 * 10))
        setEmail('')
        setMessage('')
        setCooperation(false)
    }

    return (
        <Container className={`FeedbackForm ${theme}`}>

            <Form onSubmit={handleSend} className={"small"}>
                <h5>
                    {getLang() === 'rus' && "Вы можете задать нам свои вопросы"}
                    {getLang() === 'eng' && "You can ask us your questions"}
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
                        rows={3}
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

                <Button size={"sm"} variant="primary" type="submit" className={"w-100"}>
                    {getLang() === "rus" ? "Отправить" : "Send"}
                </Button>
            </Form>

            {/*главная информация*/}
            {showInfo && <GeneralInfo />}
        </Container>
    );
};

export default FeedbackForm;
