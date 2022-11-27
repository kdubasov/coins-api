import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../../contexts/UserAuthContext";

//css
import "./Login.css";
import {getTheme} from "../../../functions/Theme/getTheme";
import {getLang} from "../../../functions/Lang/getLang";

const Login = () => {

  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/userProfile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <Container className="Login">

          <div className="text-container w-100">
              <h4>
                  {getLang() === "eng" && "Authorization"}
                  {getLang() === "rus" && "Авторизация"}
              </h4>

              <p>
                  {
                      getLang() === "eng" &&
                      "After authorization, you will be taken to your personal account." +
                      " You can also add coins, nft and exchanges to your favorites and" +
                      " track their changes right in your personal account. Authorization" +
                      " takes less than a minute, we tried to make it as convenient as possible for users."
                  }

                  {
                      getLang() === "rus" &&
                      "После авторизации вы попадете в личный кабинет. Также вы сможете добавлять монеты," +
                      " nft и биржи в избранное и отслеживать их изменения прямо в личном кабинете." +
                      " Авторизация занимает менее минуты, мы старались сделать ее максимально удобной" +
                      " для пользователей."
                  }
              </p>
          </div>

          <div className="buttons-container">
              <GoogleButton
                  type={getTheme(true) === "dark" ? "light" : "dark"}
                  onClick={handleGoogleSignIn}
              />

              <Link to="/phoneLogin">
                  <Button variant="primary">
                      {getLang() === "eng" && "Phone login"}
                      {getLang() === "rus" && "Вход по номеру телефона"}
                  </Button>
              </Link>
          </div>

      </Container>
  );
};

export default Login;
