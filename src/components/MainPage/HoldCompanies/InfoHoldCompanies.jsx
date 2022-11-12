import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {GL_COMP, GL_HOLD_MC_DOM, GL_HOLD_TT, GL_HOLD_TT_VAL} from "../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";
import {getLang} from "../../../functions/Lang/getLang";

const InfoHoldCompanies = ({info}) => {

    return (
        <ListGroup horizontal className={'InfoHoldCompanies text-center mb-5'}>
            <ListGroupItem>
                <h4 className={'m-0 fw-bold'}>{info[GL_HOLD_MC_DOM] && info[GL_HOLD_MC_DOM] + '%'}</h4>
                {getLang() === 'rus' && "Доминирование холдинговых сбережений на рынке"}
                {getLang() === 'eng' && "Dominance of holding savings in the market"}
            </ListGroupItem>
            <ListGroupItem>
                <h4 className={'m-0 fw-bold'}>
                    {info[GL_HOLD_TT] && getNumRedAfterDoot(info[GL_HOLD_TT],3).toLocaleString() + 'шт.'}
                </h4>
                {getLang() === 'rus' && "Монет на удержании"}
                {getLang() === 'eng' && "Coins on hold"}
            </ListGroupItem>
            <ListGroupItem>
                <h4 className={'m-0 fw-bold'}>
                    {info[GL_HOLD_TT_VAL] && getNumRedAfterDoot(info[GL_HOLD_TT_VAL],3).toLocaleString() + '$'}
                </h4>
                {getLang() === 'rus' && "Общая сумма активов"}
                {getLang() === 'eng' && "Total assets"}
            </ListGroupItem>
            <ListGroupItem>
                <h4 className={'m-0 fw-bold'}>{info[GL_COMP] && info[GL_COMP].length}</h4>
                {getLang() === 'rus' && "Холдиновых компании"}
                {getLang() === 'eng' && "Holding companies"}
            </ListGroupItem>
        </ListGroup>
    );
};

export default InfoHoldCompanies;
