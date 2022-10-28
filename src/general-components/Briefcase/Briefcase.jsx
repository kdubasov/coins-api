import React from 'react';
import {Badge} from "react-bootstrap";
import SavedCoinsTable from "./components/SavedCoins/SavedCoinsTable";

const Briefcase = () => {

    const getBadge = text => {
        return (
            <h5><Badge bg={"secondary"} className={"fw-light"}>{text}</Badge></h5>
        )
    }
    return (
        <div className={'Briefcase container'}>
            <h3><Badge>Избранное</Badge></h3>

            {getBadge("Монеты")}
            <SavedCoinsTable />
        </div>
    );
};

export default Briefcase;
