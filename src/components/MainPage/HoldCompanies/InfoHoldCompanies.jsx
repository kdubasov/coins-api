import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {GL_COMP, GL_HOLD_MC_DOM, GL_HOLD_TT, GL_HOLD_TT_VAL} from "../../../constants/ApiConstants";
import {getNumRedAfterDoot} from "../../../functions/getNumRedAfterDoot";

const InfoHoldCompanies = ({info}) => {

    return (
        <ListGroup horizontal className={'InfoHoldCompanies text-center mb-5'}>
            <ListGroupItem>
                <h4 className={'m-0 fw-bold'}>{info[GL_HOLD_MC_DOM] && info[GL_HOLD_MC_DOM] + '%'}</h4>
                Доминирование холдинговых сбережений на рынке
            </ListGroupItem>
            <ListGroupItem>
                <h4 className={'m-0 fw-bold'}>
                    {info[GL_HOLD_TT] && getNumRedAfterDoot(info[GL_HOLD_TT],3).toLocaleString() + 'шт.'}
                </h4>
                Монет на удержании
            </ListGroupItem>
            <ListGroupItem>
                <h4 className={'m-0 fw-bold'}>
                    {info[GL_HOLD_TT_VAL] && getNumRedAfterDoot(info[GL_HOLD_TT_VAL],3).toLocaleString() + '$'}
                </h4>
                Общая сумма активов
            </ListGroupItem>
            <ListGroupItem>
                <h4 className={'m-0 fw-bold'}>{info[GL_COMP] && info[GL_COMP].length}</h4>
                Холдиновых компании
            </ListGroupItem>
        </ListGroup>
    );
};

export default InfoHoldCompanies;
