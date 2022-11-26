import React from 'react';
import {Button, Container} from "react-bootstrap";
import {getLang} from "../../../functions/Lang/getLang";

//css
import './NavbarPaginate.css';

const NavbarPaginate = ({navPaginate,setNavPaginate,theme}) => {

    const handleSet = value =>{
        setNavPaginate(value)
    }

    const getButton = (text,value) =>{
        return(
            <Button
                className={`but-${theme}`}
                size={"sm"}
                disabled={value === navPaginate}
                onClick={() =>handleSet(value)}
            >
                {text}
            </Button>
        )
    }

    return (
        <Container className={'NavbarPaginate'}>
            {getButton(getLang() === 'eng' ? "Coins" : "Монеты", "coins")}
            {getButton(getLang() === 'eng' ? "Categories" : "Категории", "categories")}
            {getButton("NFT", "nft")}
            {getButton("DeFi", "defi")}
            {getButton(getLang() === 'eng' ? "Derivatives" : "Деривативы","derivatives")}
            {getButton(getLang() === 'eng' ? "Popular coins" : "Популярные монеты", "trendCoins")}
            {getButton(getLang() === 'eng' ? "Exchanges" : "Биржи", "exchanges")}
            {getButton(getLang() === 'eng' ? "Best/worst coins" : "Лучшие/худшие монеты", "topLoseCoins")}
            {getButton(getLang() === 'eng' ? "Holding companies" : "Холдинговые компании", "holdCompanies")}
        </Container>
    );
};

export default NavbarPaginate;
