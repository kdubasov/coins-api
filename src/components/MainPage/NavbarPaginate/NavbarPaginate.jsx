import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

const NavbarPaginate = ({navPaginate,setNavPaginate}) => {

    const handleSet = value =>{
        setNavPaginate(value)
    }

    const getButton = (text,value) =>{
        return(
            <Button
                variant={"outline-primary"}
                disabled={value === navPaginate}
                onClick={() =>handleSet(value)}
            >
                {text}
            </Button>
        )
    }

    return (
        <div className={'NavbarPaginate container mb-3 mt-3 d-flex'}>
            <ButtonGroup>
                {getButton("Монеты","coins")}
                {getButton("Категории","categories")}
                {getButton("NFT","nft")}
                {getButton("DeFi","defi")}
                {getButton("Топ монет","trendCoins")}
            </ButtonGroup>
        </div>
    );
};

export default NavbarPaginate;
