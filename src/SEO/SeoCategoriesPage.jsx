import React from 'react';
import {Helmet} from "react-helmet";
import {getLang} from "../functions/Lang/getLang";

const SeoCategoriesPage = ({data}) => {

    if(data){
        if (getLang() === "eng"){
            return (
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="robots" content="all"/>
                    <title>{data} category | Top coins | General info | cryptoQuick</title>
                    <meta
                        name="description"
                        content={`${data}, top coins, prices, cryptocurrency, categories, exchanges. Categories market data | cryptoQuick`}
                    />
                </Helmet>
            );
        }else {
            return (
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="robots" content="all"/>
                    <title>{data} категория | Лучшие монеты | Основная информация | cryptoQuick</title>
                    <meta
                        name="description"
                        content={`${data}, топ монет, цены, криптовалюта, категории криптовалюты, биржи. Рыночная информация категорий | cryptoQuick`}
                    />
                </Helmet>
            );
        }
    }else {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="all"/>
                <title>cryptoQuick | Category not found</title>
                <meta
                    name="description"
                    content={`top coins, prices, cryptocurrency, categories, exchanges. Categories market data | cryptoQuick`}
                />
            </Helmet>
        )
    }
};

export default SeoCategoriesPage;
