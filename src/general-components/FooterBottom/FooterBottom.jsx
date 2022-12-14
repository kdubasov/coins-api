import React from 'react';
import {Badge, Container} from "react-bootstrap";
import {getTheme} from "../../functions/Theme/getTheme";
import {getLang} from "../../functions/Lang/getLang";

//css
import "./FooterBottom.css";
import "./FooterBottomMedia.css";
import {TickerTape} from "react-ts-tradingview-widgets";

const FooterBottom = ({warningShow = true}) => {

    const theme = getTheme(true)

    return (
        <>
            <div className={`Disclaimer ${theme} ${!warningShow && 'notShow'}`}>
                <Container className="small">
                    <h4>
                        {getLang() === "eng" ? "Warning!" : "Предупреждение!"}
                        <small>
                            ({getLang() === "eng" ? "Recommended for review." : "Рекомендовано к ознакомлению."})
                        </small>
                    </h4>
                    <p className="small m-0">
                        {
                            getLang() === "rus" &&
                            "Весь контент, представленный на нашем веб-сайте, сайтах с гиперссылками, связанных приложениях," +
                            " форумах, блогах, учетных записях в социальных сетях и других платформах («Сайт») предназначен " +
                            "только для вашей общей информации и получен из сторонних источников. Мы не даем никаких гарантий " +
                            "в отношении нашего контента, включая, помимо прочего, точность и актуальность. Никакая часть контента, " +
                            "который мы предоставляем, не является финансовой консультацией, юридической консультацией или какой-либо " +
                            "другой формой консультации, предназначенной для вашего конкретного использования в любых целях. " +
                            "Любое использование или доверие к нашему контенту осуществляется исключительно на ваш страх и риск " +
                            "и по вашему усмотрению. Вы должны провести собственное исследование, просмотреть, проанализировать и " +
                            "проверить наш контент, прежде чем полагаться на них. Торговля — это очень рискованная деятельность, " +
                            "которая может привести к крупным убыткам, поэтому, прежде чем принимать какое-либо решение, " +
                            "проконсультируйтесь со своим финансовым консультантом. Никакой контент на нашем Сайте не должен " +
                            "быть призывом или предложением."
                        }
                        {
                            getLang() === "eng" &&
                            "All content provided herein our website, hyperlinked sites, associated applications, " +
                            "forums, blogs, social media accounts and other platforms (“Site”) is for your general " +
                            "information only, procured from third party sources. We make no warranties of any kind " +
                            "in relation to our content, including but not limited to accuracy and updatedness. " +
                            "No part of the content that we provide constitutes financial advice, legal advice " +
                            "or any other form of advice meant for your specific reliance for any purpose. Any use " +
                            "or reliance on our content is solely at your own risk and discretion. You should conduct " +
                            "your own research, review, analyse and verify our content before relying on them. Trading " +
                            "is a highly risky activity that can lead to major losses, please therefore consult your " +
                            "financial advisor before making any decision. No content on our Site is meant to be a " +
                            "solicitation or offer."
                        }
                    </p>
                </Container>
            </div>

            {
                warningShow &&
                <TickerTape displayMode={"compact"} colorTheme={getTheme(true)}></TickerTape>
            }

            <div className={`FooterBottom ${theme}`}>

                <Container className={!warningShow && 'noPadding'}>
                    <div className={`left ${!warningShow && 'notShow'}`}>
                        <img src={`/images/NavbarTop/${theme}.svg`} alt=""/>
                        <p className="small">
                            {
                                getLang() === "rus" &&
                                "Данный проект создан для ознакомления с информацией " +
                                "о криптовалюте, NFT, биржах и деривативах."
                            }
                            {
                                getLang() === "eng" &&
                                "This project was created to get acquainted with " +
                                "information about cryptocurrencies, NFTs, exchanges and derivatives."
                            }
                        </p>
                    </div>

                    <div className="right">
                        <div className="links">
                            <Badge>
                                <a className={"small"} href="https://github.com/kdubasov" rel={"noreferrer"} target={"_blank"}>
                                    kdubasov
                                </a>
                            </Badge>

                            <Badge className={"mx-2"}>
                                <a className={"small"} href="https://github.com/pokemzed" rel={"noreferrer"} target={"_blank"}>
                                    michael
                                </a>
                            </Badge>

                            <Badge bg={"primary"} className={"gecko"}>
                                <a className={"small"} href="https://www.coingecko.com/" rel={"noreferrer"} target={"_blank"}>
                                    CoinGecko
                                </a>
                            </Badge>
                        </div>

                        <p className="small text-end">
                            © {new Date().getFullYear()} cryptoQuick.
                            {getLang() === "eng" && " All Rights Reserved."}
                            {getLang() === "rus" && " Все права защищены."}
                            <br />
                            {getLang() === "eng" && "Powered by "}
                            {getLang() === "rus" && "При поддержке "}
                            <a
                                className={"small"}
                                href="https://www.coingecko.com/"
                                rel={"noreferrer"}
                                target={"_blank"}
                                style={{color:"#326CF4",textDecoration:"underline"}}
                            >
                                CoinGecko
                            </a>
                        </p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default FooterBottom;
