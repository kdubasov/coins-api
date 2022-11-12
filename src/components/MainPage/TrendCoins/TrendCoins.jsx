import React from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_SIMPLE_PRICE, GLOBAL_API_TOP_7_COINS} from "../../../constants/ApiCommand";
import {Badge, ListGroup, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {GL_MC_RANK, GL_NAME, GL_PR_BTC, GL_SYMBOL} from "../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";
import {getLang} from "../../../functions/Lang/getLang";

const TrendCoins = () => {

    const data = useApi(GLOBAL_API_TOP_7_COINS).data;
    // console.log(data.coins,'TrendCoins data');

    //цена монетки в btc
    const btcPrice = useApi(GLOBAL_API_SIMPLE_PRICE('bitcoin','usd'))['data'];
    // console.log(btcPrice)

    return (
        <div className={`TrendCoins container`}>
            <h3 className={'m-0'}>
                <Badge>
                    {getLang() === 'eng' && 'Popular coins'}
                    {getLang() === 'rus' && 'Популярные монеты'}
                </Badge>
            </h3>

            <p className={'mb-3'}>
                {
                    getLang() === 'eng' &&
                    "Top 7 most popular coins in 24 hours according to CoinGecko statistics. (sorted by popularity)"
                }
                {
                    getLang() === 'rus' &&
                    "Топ 7 самых популярных монет за 24 часа по статистике CoinGecko. (Отсортированы по популярности)"
                }
            </p>

            {
                data.coins?
                    data.coins.map((coinObject) => (
                        Object.values(coinObject).map(coin =>(
                            <div key={coin.id}>
                                <ListGroup className={`my-2 w-100`}>
                                    <ListGroup.Item className={`d-flex justify-content-between align-items-center`}>
                                        <div className={`d-flex align-items-center`}>
                                            <img width={30} src={coin.small} alt={coin[GL_NAME]}/>
                                            <p className="small m-0 mx-2">
                                                ({coin[GL_SYMBOL]})
                                                <Link
                                                    className={`mx-2 fw-bold`}
                                                    to={`/coins/${coin.id}`}
                                                >
                                                    {coin[GL_NAME]}
                                                </Link>
                                            </p>
                                            <Badge bg={"secondary"} className={"fw-normal"}>
                                                Акт.цена:
                                                {
                                                    (btcPrice !== [] && btcPrice && Object.values(btcPrice).length) &&
                                                    ' ' + getNumRedAfterDoot(coin[GL_PR_BTC] * btcPrice['bitcoin']['usd'],5) + '$'
                                                }
                                            </Badge>
                                        </div>

                                        <Badge>
                                            Rank #{coin[GL_MC_RANK]}
                                        </Badge>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        ))
                    )):
                    <Spinner animation={"border"} variant={"primary"} />
            }
        </div>
    );
};

export default TrendCoins;
