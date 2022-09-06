import React from 'react';
import {ListGroup} from "react-bootstrap";

const Coins = ({coins}) => {

    //сортировка для показа не более 10 резульаттов
    const dataFilter = coins[1].length>10?coins[1].filter((elem,ids) => ids<10):coins[1];

    return (
        <ListGroup.Item>
            <h3>{coins[0].toUpperCase()}</h3>
            <ListGroup>
                {
                    dataFilter.map(elem =>(
                        <ListGroup.Item action href="#link1" key={elem.id}>
                            <img src={elem['thumb']} style={{marginRight:5}} alt=""/>
                            <strong>({elem.symbol})</strong> {elem.name}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </ListGroup.Item>
    );
};

export default Coins;