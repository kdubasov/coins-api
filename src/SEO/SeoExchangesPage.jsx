import React from 'react';
import {GL_NAME} from "../constants/ApiConstants";
import {getLang} from "../functions/Lang/getLang";
import {Helmet} from "react-helmet";

const SeoExchangesPage = ({data}) => {

    // console.log(data,'SeoExchangesPage');

    if (data[GL_NAME]){
        if (getLang() === "eng"){
            return(
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="robots" content="all"/>
                    <title>{data[GL_NAME]} Trade | Volume | Market cap Graph | cryptoQuick</title>
                    <meta
                        name="description"
                        content={`${data[GL_NAME]}, cryptocurrency exchanges, trading, exchanges. Exchanges market data, volume and markets. | cryptoQuick`}
                    />
                </Helmet>
            )
        } else {
            return(
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="robots" content="all"/>
                    <title>{data[GL_NAME]} Трейдинг | Объем | Рыночная капитализация | cryptoQuick</title>
                    <meta
                        name="description"
                        content={`${data[GL_NAME]}, биржи криптовалют, покупка, продажа, биржи. Основная информация о бирже. | cryptoQuick`}
                    />
                </Helmet>
            )
        }
    }else {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="all"/>
                <title>Exchange not found | cryptoQuick</title>
                <meta
                    name="description"
                    content={`Cryptocurrency exchanges, trading, exchanges. Exchanges market data, volume and markets. | cryptoQuick`}
                />
            </Helmet>
        )
    }
};

export default SeoExchangesPage;
