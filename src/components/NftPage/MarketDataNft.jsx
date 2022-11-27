import React from 'react';
import {getTheme} from "../../functions/Theme/getTheme";
import {GL_FL_PR, GL_MK, GL_NFT_NAT_CUR, GL_NFT_OWN, GL_TT_CNS, GL_VOL_24H} from "../../constants/ApiConstants";
import {Link} from "react-router-dom";
import {getLang} from "../../functions/Lang/getLang";

const MarketDataNft = ({dataMain}) => {

    const getListItem = (title,value) => {
        if (value){
            return (
                <div className={"inner"}>
                    <p className={"small"}>{title}:</p>
                    <h5>{value}</h5>
                </div>
            )
        }
    }

    return (
        <div className={`nft-market-data ${getTheme(true)}`}>
            {getListItem('24-часовой объем',dataMain[GL_VOL_24H]['usd']+'$')}
            {getListItem('Рыночная капитализация',dataMain[GL_MK]['usd']+'$')}
            {getListItem('Минимальная цена',dataMain[GL_FL_PR]['usd']+'$')}
            {getListItem('Общее предложение',dataMain[GL_TT_CNS])}
            {getListItem('Владельцы',dataMain[GL_NFT_OWN])}

            {/*with link to coin*/}
            {
                dataMain[GL_NFT_NAT_CUR] &&
                <div className={"inner"}>
                    <p className="small">
                        {getLang() === "eng" && "Currency:"}
                        {getLang() === "rus" && "Валюта:"}
                    </p>
                    <h5>
                        <Link to={`/coins/${dataMain[GL_NFT_NAT_CUR]}`}>
                            {dataMain[GL_NFT_NAT_CUR].toUpperCase()}
                        </Link>
                    </h5>
                </div>
            }
        </div>
    );
};

export default MarketDataNft;
