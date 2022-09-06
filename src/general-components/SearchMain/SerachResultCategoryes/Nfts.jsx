import React from 'react';
import {ListGroup} from "react-bootstrap";

const Nfts = ({query,nfts}) => {


    //для того чтобы находились нфт только с такими именами
    const nftsSortName = nfts[1].filter(elem => (elem.name.toLowerCase()).includes(query.toLowerCase()));
    //для показа не более 10 рез-ов
    const nftsSortMaxName = nftsSortName.length>10?nftsSortName.filter((elem,ids) => ids<10):nftsSortName;

    return (
        <ListGroup.Item>
            <h3>{nfts[0].toUpperCase()}</h3>
            <ListGroup>
                {
                    nftsSortMaxName.map(elem =>(
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

export default Nfts;