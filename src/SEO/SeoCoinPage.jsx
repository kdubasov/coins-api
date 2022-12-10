import React from 'react';
import {Helmet} from "react-helmet";
import {GL_NAME, GL_SYMBOL} from "../constants/ApiConstants";
import {getLang} from "../functions/Lang/getLang";

const SeoCoinPage = ({data}) => {

    // console.log(data,'SeoCoinPage')

    if (data[GL_NAME] && data[GL_SYMBOL]){
            if(getLang() === "eng"){
                return (
                    <Helmet>
                        <meta charSet="utf-8" />
                        <meta name="robots" content="all"/>
                        <title>{data[GL_NAME]}({data[GL_SYMBOL].toUpperCase()}) Price in USD, basic information about {data[GL_NAME]} | cryptoQuick</title>
                        <meta
                            name="description"
                            content={`${data[GL_NAME]} market data, price, ${data[GL_SYMBOL]}, buy, sell, exchanges. ${data[GL_NAME].toUpperCase()} Market cap and volume. cryptoQuick`}
                        />
                        <meta
                            name="keywords"
                            content={`${data[GL_NAME]}, ${data[GL_SYMBOL]}, ${data[GL_NAME]} price, ${data[GL_NAME]} volume, ${data[GL_NAME]} market cap, ${data[GL_NAME]} price chart, cryptoQuick`}
                        />
                    </Helmet>
                )
            }else {
                return (
                    <Helmet>
                        <meta charSet="utf-8" />
                        <meta name="robots" content="all"/>
                        <title>{data[GL_NAME]}({data[GL_SYMBOL].toUpperCase()}) цена, основная информация о {data[GL_NAME]} | cryptoQuick</title>
                        <meta
                            name="description"
                            content={`${data[GL_NAME]} рыночные данные, цена, ${data[GL_SYMBOL]}, купить, продать, биржи. ${data[GL_NAME].toUpperCase()} рыночная капитализация и объем. cryptoQuick`}
                        />
                        <meta
                            name="keywords"
                            content={`${data[GL_NAME]}, ${data[GL_SYMBOL]}, ${data[GL_NAME]} цена, ${data[GL_NAME]} объем, ${data[GL_NAME]} рыночная капитализация, ${data[GL_NAME]} график цены`}
                        />
                    </Helmet>
                )
            }
    }else {
        if (getLang() === "eng"){
            return (
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="robots" content="all"/>
                    <title>cryptoQuick | Coin page</title>
                    <meta
                        name="description"
                        content={`cryptocurrency market data, price, cryptocurrency, buy, sell, exchanges. Cryptocurrency Market cap and volume. cryptoQuick`}
                    />
                </Helmet>
            )
        }else {
            return (
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="robots" content="all"/>
                    <title>cryptoQuick | Монета</title>
                    <meta
                        name="description"
                        content={`рыночные данные монеты, цена, криптовалюта, купить, продать, биржи. Рыночные данные криптовалюты. cryptoQuick`}
                    />
                </Helmet>
            )
        }
    }
};

export default SeoCoinPage;
