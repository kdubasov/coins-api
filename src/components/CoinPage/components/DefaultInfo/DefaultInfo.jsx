import React from 'react';
import {
    GL_CUR_PRICE,
    GL_DESCRIPT, GL_HIGH_24H,
    GL_IMAGE, GL_LOW_24H,
    GL_MC_RANK,
    GL_MD,
    GL_NAME,
    GL_SYMBOL
} from "../../../../constants/ApiConstants";
import {Badge, ProgressBar} from "react-bootstrap";
import {getLang} from "../../../../functions/Lang/getLang";
import MainButtons from "../MainButtons/MainButtons";
import {useApi} from "../../../../hooks/useApi";
import {GLOBAL_API_SIMPLE_PRICE} from "../../../../constants/ApiCommand";
import {getTheme} from "../../../../functions/Theme/getTheme";

//css
import "./DefaultInfo.css";
import "./DefaultInfoMedia.css";

const DefaultInfo = ({dataMain,setShowAlert}) => {

    //цена монетки в btc
    const btcPrice = useApi(GLOBAL_API_SIMPLE_PRICE(dataMain['id'],'btc')).data[dataMain['id']];
    // console.log(btcPrice)

    return (
        <div className={`DefaultInfo ${getTheme(true)}`}>
            {
                dataMain[GL_MC_RANK] &&
                <Badge bg={"primary"} className={"coin-rank"}>
                    {getLang() === "rus" && "Номер "}
                    {getLang() === "eng" && "Rank "}
                    #{dataMain[GL_MC_RANK]}
                </Badge>
            }

            <header>
                <div className={'name-block'}>
                    {/* name symbol logo act.price */}
                    <img src={dataMain[GL_IMAGE]['large']} alt={dataMain[GL_NAME]} />
                    {/*символ и название*/}
                    <h3>{dataMain[GL_NAME]} ({dataMain[GL_SYMBOL].toUpperCase()})</h3>
                </div>

                {/*кнопка для добавление в избранное и поделиться*/}
                <MainButtons coinId={dataMain['id']} setShowAlert={setShowAlert} table={'coins'} title={'Монета'} />
            </header>

            <div className="price-block">
                <h3>
                    {//price
                        dataMain[GL_MD][GL_CUR_PRICE]["usd"] &&
                        dataMain[GL_MD][GL_CUR_PRICE]["usd"].toLocaleString() + "$"
                    }
                </h3>
                {/*btc price*/}
                <p className={"small"}>
                    {btcPrice && btcPrice['btc'].toLocaleString()  + 'BTC'}
                </p>
            </div>

            {
                (dataMain[GL_MD] && Object.values(dataMain[GL_MD]).length) &&
                <div className="min-max-block">
                    <ProgressBar
                        now={dataMain[GL_MD][GL_CUR_PRICE]["usd"]}
                        min={dataMain[GL_MD][GL_LOW_24H]["usd"]}
                        max={dataMain[GL_MD][GL_HIGH_24H]["usd"]}
                        visuallyHidden
                    />
                    <footer>
                        <p className={"small"}>{dataMain[GL_MD][GL_LOW_24H]["usd"] + "$"}</p>
                        <p className={"small"}>
                            {getLang() === "eng" && "24H Range"}
                            {getLang() === "rus" && "Минимум и максимум за 24 часа"}
                        </p>
                        <p className={"small"}>{dataMain[GL_MD][GL_HIGH_24H]["usd"] + "$"}</p>
                    </footer>
                </div>
            }

            {/*description*/}
            {
                dataMain[GL_DESCRIPT]['en'] &&
                <p className="small">
                    {dataMain[GL_DESCRIPT]['en'].slice(0,800) + '...'}
                </p>
            }
        </div>
    );
};

export default DefaultInfo;
