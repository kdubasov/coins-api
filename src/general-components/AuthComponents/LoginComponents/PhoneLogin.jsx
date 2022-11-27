import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Form, Alert, Container} from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import {getLang} from "../../../functions/Lang/getLang";
import {getTheme} from "../../../functions/Theme/getTheme";

const PhoneLogin = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (!number) return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || !otp) return;
    try {
      await result.confirm(otp);
      navigate("/userProfile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <Container className="Login phone">

        <div className="text-container w-100">
          <h4>
            {getLang() === "eng" && "Phone authorization"}
            {getLang() === "rus" && "Авторизация по номеру телефона"}
          </h4>

          <p>
            {
                getLang() === "eng" &&
                "After you enter your phone number you will receive an SMS with a code. " +
                "You must enter this code in the input field, then you will be directed " +
                "to your personal account."
            }
            {
                getLang() === "rus" &&
                "После того как вы введете ваш номер телефона вам придет смс с кодом. " +
                "Вы должны ввести этот код в поле ввода, затем вы будете направлены в ваш личный кабинет."
            }
          </p>
        </div>

        <div className={"w-100"}>
          {error && <Alert className={"alert-phone-error"} variant="danger">{error}</Alert>}
        </div>

        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>

          <div className={`phone-input-block ${getTheme(true)}`}>
            <PhoneInput
                defaultCountry={getLang() === "eng" ? "US" : "RU"}
                value={number}
                onChange={setNumber}
                placeholder={getLang() === "eng" ? "Enter phone number" : "Введите номер телефона"}
            />
          </div>

            <div id="recaptcha-container" className={"mb-3"} />

            <div className={'buttons-container'}>
              <Link to="/login">
                <Button variant="secondary" className={"m-0"}>
                  {getLang() === "eng" && "Back"}
                  {getLang() === "rus" && "Назад"}
                </Button>
              </Link>

              <Button style={{height:"auto"}} variant={"primary"} type="submit">
                {getLang() === "eng" && "Send"}
                {getLang() === "rus" && "Получить код"}
              </Button>
            </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>

          <input
              className={`otp-input ${getTheme(true)} mb-3`}
              style={{marginLeft:0}}
              type="otp"
              placeholder={getLang() === "eng" ? "Enter OTP" : "Введите код"}
              onChange={(e) => setOtp(e.target.value)}
          />

          <div className="buttons-container">
            <Link to="/login">
              <Button className={"m-0"} variant="secondary">
                {getLang() === "eng" && "Cancel"}
                {getLang() === "rus" && "Отменить"}
              </Button>
            </Link>

            <Button type="submit" variant="primary" style={{height:"auto"}}>
              {getLang() === "eng" && "Confirm"}
              {getLang() === "rus" && "Подтвердить"}
            </Button>
          </div>

        </Form>
      </Container>
  );
};

export default PhoneLogin;
