import React from 'react';
import {Button, Container} from "react-bootstrap";
import {getLang} from "../../../functions/Lang/getLang";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../../contexts/UserAuthContext";

//css
import './BannerTop.css';
import './BannerTopMedia.css';

const BannerTop = ({theme}) => {

    const { user } = useUserAuth();

    return (
        <Container className={`BannerTop`}>

            <div className={`BannerTop-inner ${theme}`}>
                <div className="text-container">
                    <h4>
                        {getLang() === "eng" && 'Follow cryptocurrencies with cryptoQuick'}
                        {getLang() === "rus" && "Следите за изменением криптовалют вместе с cryptoQuick"}
                    </h4>
                    <p className="small">
                        {
                            getLang() === "eng" &&
                            "After authorization, you will be able to add coins, " +
                            "nft or exchanges to your favorites and track their changes in your personal account. " +
                            "No content on our web-site should be an solicitation or solicitation."
                        }
                        {
                            getLang() === "rus" &&
                            "После авторизации вы сможете добавлять в избранное монеты, nft или биржи и " +
                            "отслеживать их изменения у себя в личном кабинете. " +
                            "Никакой контент на нашем Сайте не является призывом или предложением."
                        }
                    </p>

                    {   //если юзер есть то ссылка на аккаунт если нет то на авторизацию
                        user ?
                            <Button variant={"success"} disabled size={"sm"}>
                                {getLang() === "eng" && "You are logged in, thank you for your interest in our project."}
                                {getLang() === "rus" && "Вы авторизованы, спасибо за интерес к нашему проекту."}
                            </Button>:
                            <Link to={"/login"}>
                                <Button size={"sm"} variant={"primary"}>
                                    {getLang() === "eng" && "Sign Up with E-mail/Phone"}
                                    {getLang() === "rus" && "Войти с помощью телефона/почты"}
                                </Button>
                            </Link>
                    }
                </div>
            </div>

        </Container>
    );
};

export default BannerTop;
