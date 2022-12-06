import React from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_SIMPLE_PRICE, GLOBAL_API_TOP_7_COINS} from "../../../constants/ApiCommand";
import {Badge, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {GL_MC_RANK, GL_NAME, GL_PR_BTC, GL_SYMBOL} from "../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";
import {getLang} from "../../../functions/Lang/getLang";
import TableBestCoins from "../../../general-components/TableBestCoins/TableBestCoins";
import SpinnerAlert from "../../../general-components/Alerts/SpinnerAlert/SpinnerAlert";
import {getTheme} from "../../../functions/Theme/getTheme";

//css
import "./TrendCoins.css";
import "./TrendCoinsMedia.css";

const TrendCoins = ({setShowAlert,showBestCoins = true}) => {

    const data = useApi(GLOBAL_API_TOP_7_COINS).data;
    // console.log(data.coins,'TrendCoins data');

    //цена монетки в btc
    const btcPrice = useApi(GLOBAL_API_SIMPLE_PRICE('bitcoin','usd'))['data'];
    // console.log(btcPrice)

    return (
        <Container className={`TrendCoins ${getTheme(true)}`}>
            <h4 className={'m-0'}>
                {getLang() === 'eng' && 'Popular coins'}
                {getLang() === 'rus' && 'Популярные монеты'}
            </h4>

            <p className={'mb-3 small'}>
                {
                    getLang() === 'eng' &&
                    `Top ${data?.coins?.length} most popular coins in 24 hours according to ` +
                    "CoinGecko statistics. (sorted by popularity)"
                }
                {
                    getLang() === 'rus' &&
                    `Топ ${data?.coins?.length} самых популярных монет за 24 часа по статистике CoinGecko.` +
                    "(Отсортированы по популярности)"
                }
            </p>

            <div className="trend-coins-container">
                {
                    data.coins?
                        data.coins.map((coinObject,ids) => (
                            Object.values(coinObject).map(coin =>(
                                <div className={`inner ${!ids && 'first'}`} key={coin.id}>

                                    <Badge className={"rank"}>
                                        #{coin[GL_MC_RANK]}
                                    </Badge>

                                    <div className={"left"}>
                                        <img width={30} src={coin['large'] || coin['small']} alt={coin[GL_NAME]}/>

                                        <div className={"content"}>

                                            <Link to={`/coins/${coin.id}`}>
                                                ({coin[GL_SYMBOL]}) {coin[GL_NAME]}
                                            </Link>

                                            <h6>
                                                {getLang() === "eng" && "Act. price: "}
                                                {getLang() === "rus" && "Акт. цена: "}
                                                {
                                                    (btcPrice !== [] && btcPrice && Object.values(btcPrice).length) &&
                                                    getNumRedAfterDoot(coin[GL_PR_BTC] * btcPrice['bitcoin']['usd'],5) + '$'
                                                }
                                            </h6>
                                        </div>
                                    </div>

                                    {
                                        !ids &&
                                        <span className={"span-best"}>
                                            1ST
                                        </span>
                                    }
                                </div>
                            ))
                        )):
                        <SpinnerAlert />
                }
            </div>

            {
                showBestCoins &&
                <TableBestCoins setShowAlert={setShowAlert} />
            }
        </Container>
    );
};

export default TrendCoins;
