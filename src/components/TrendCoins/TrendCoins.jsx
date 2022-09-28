import React from 'react';
import {useApi} from "../../functions/useApi";
import {GLOBAL_API_TOP_7_COINS} from "../../constants/ApiCommand";
import {Badge, ListGroup, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

const TrendCoins = () => {

    const data = useApi(GLOBAL_API_TOP_7_COINS).data;
    // console.log(data.coins,'TrendCoins data')


    return (
        <div className={`TrendCoins container`}>
            <h3><Badge>Популярные монеты</Badge></h3>

            {
                data.coins?
                    data.coins.map((coinObject) => (
                        Object.values(coinObject).map(coin =>(
                            <div key={coin.id}>
                                <ListGroup className={`my-2 w-100`}>
                                    <ListGroup.Item className={`d-flex align-items-center`}>
                                        <img width={30} src={coin.small} alt={coin.name}/>
                                        <p className="small m-0 mx-2">
                                            ({coin.symbol})
                                                <Link
                                                    className={`mx-2 fw-bold`}
                                                    to={`/coins/${coin.id}`}
                                                >
                                                    {coin.name}
                                                </Link>
                                        </p>
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
