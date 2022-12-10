import React from 'react';
import {Helmet} from "react-helmet";
import {getLang} from "../functions/Lang/getLang";

const SeoMainPage = () => {
    if (getLang() === "eng"){
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="all"/>
                <title>cryptoQuick | Analysis of the crypto market</title>
                <meta
                    name="description"
                    content="cryptoQuick provides a fundamental analysis of the crypto market."
                />
                <meta
                    name="keywords"
                    content="crypto quick, cryptoQuick, cryptocurrency, exchanges cryptocurrency, nft, cryptocurrency prices, cryptocurrency exchange rate, cryptocurrency today"
                />
            </Helmet>
        );
    }else {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="all"/>
                <title>cryptoQuick | Анализ крипторынка</title>
                <meta
                    name="description"
                    content="cryptoQuick предоставляет фундаментальный анализ крипторынка."
                />
                <meta name="keywords" content="crypto quick, cryptoQuick, криптовалюта, биржи криптовалюты, nft, цены криптовалют, курс криптовалют, криптовалюта сегодня, крипта" />
            </Helmet>
        );
    }
};

export default SeoMainPage;
