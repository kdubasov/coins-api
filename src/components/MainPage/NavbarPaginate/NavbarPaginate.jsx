import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {getLang} from "../../../functions/Lang/getLang";

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
            <ButtonGroup size={"sm"}>
                {getButton(getLang() === 'eng' ? "Coins" : "Монеты","coins")}
                {getButton(getLang() === 'eng' ? "Categories" : "Категории","categories")}
                {getButton("NFT","nft")}
                {getButton("DeFi","defi")}
                {getButton(getLang() === 'eng' ? "Derivatives" : "Деривативы","derivatives")}
                {getButton(getLang() === 'eng' ? "Top coins" : "Топ монет","trendCoins")}
                {getButton(getLang() === 'eng' ? "Exchanges" : "Биржи","exchanges")}
                {getButton(getLang() === 'eng' ? "Best/worst coins" : "Лучшие/худшие монеты","topLoseCoins")}
                {getButton(getLang() === 'eng' ? "Holding companies" : "Холдинговые компании","holdCompanies")}
            </ButtonGroup>
        </div>
    );
};

export default NavbarPaginate;
