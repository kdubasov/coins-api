import React from 'react';
import {Button, Container} from "react-bootstrap";
import {getLang} from "../../functions/Lang/getLang";
import {getTheme} from "../../functions/Theme/getTheme";
import {Link} from "react-router-dom";

//css
import "./NotFoundPageInner.css";
import "./NotFoundPageInnerMedia.css";

const NotFoundPageInner = () => {
    return (
        <div className={"NotFoundPageInner"}>
            <Container>

                <img src={`/images/NotFoundPage/404-${getTheme(true)}.svg`} alt=""/>

                <div className="text-container">
                    <h1>
                        {getLang() === "eng" && "Oh no! Page not found!"}
                        {getLang() === "rus" && "О нет! Страница не найдена!"}
                    </h1>
                    <p className="small">
                        {
                            getLang() === "eng" &&
                            "The page you wanted to view was not found or does not exist. " +
                            "You can report this issue to support or visit this page later."
                        }
                        {
                            getLang() === "rus" &&
                            "Страница, которую вы хотели посмотреть не найдена или не существует. " +
                            "Вы можете сообщить об этой проблеме в поддержку или посетить " +
                            "эту страницу позже."
                        }
                    </p>

                    <Link to={"/"}>
                        <Button className={`but-${getTheme(true)}`}>
                            {getLang() === "eng" && "Come back"}
                            {getLang() === "rus" && "Вернуться назад"}
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFoundPageInner;
