import React from 'react';
import {
    GL_DESCRIPT, GL_IMAGE,
    GL_NAME, GL_NFT_PERSENT_24H,
} from "../../constants/ApiConstants";
import {Badge} from "react-bootstrap";
import MainButtons from "../CoinPage/components/MainButtons/MainButtons";
import {getLang} from "../../functions/Lang/getLang";
import MarketDataNft from "./MarketDataNft";

// css
import "./NftPage.css";
import "./NftPageMedia.css";

const MainData = ({dataMain,setShowAlert}) => {

    // console.log(dataMain,'data for one nft');

    return (
        <div className={`MainData nft`}>

            {/*кнопка для добавление в избранное и поделиться*/}
            <div className={"w-100 my-2"}>
                <MainButtons coinId={dataMain['id']} setShowAlert={setShowAlert} table={'nfts'} title={'Nft'} />
            </div>

            <header>

                <div className={"top-content"}>
                    <img
                        className={"logo"}
                        src={dataMain[GL_IMAGE]['large'] || dataMain[GL_IMAGE]['small']}
                        alt={dataMain[GL_NAME]}
                    />

                    <span className={'text-container'}>
                        <h4>{dataMain[GL_NAME]?.toUpperCase()}</h4>
                        {
                            dataMain[GL_NFT_PERSENT_24H] &&
                            <Badge bg={String(dataMain[GL_NFT_PERSENT_24H]).startsWith('-')?"danger":"success"}>
                                {!String(dataMain[GL_NFT_PERSENT_24H]).startsWith('-') && '+'}
                                {dataMain[GL_NFT_PERSENT_24H].toLocaleString("RU") + '% (24ч)'}
                            </Badge>
                        }
                    </span>
                </div>

                {/*description*/}
                <p className="small">
                    {
                        dataMain[GL_DESCRIPT] ||
                        (getLang() === "eng" ? "Описание отсутствует" : "No description")
                    }
                    <br /><br />
                    {
                        getLang() === "eng" &&
                        "We provide a limited amount of information about NFT, " +
                        "you can find more information in other sources, thank you for your understanding."
                    }
                    {
                        getLang() === "rus" &&
                        "Мы предоставляем ограниченное количество информации о NFT, вы можете найти более " +
                        "подробную информацию в других источниках, спасибо за понимание."
                    }
                </p>
            </header>

            {/*block with market data*/}
            <MarketDataNft dataMain={dataMain} />

        </div>
    );
};

export default MainData;
