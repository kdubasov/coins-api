import React from 'react';
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_GLOBAL_COMMAND} from "../../constants/ApiCommand";
import {getLang} from "../../functions/Lang/getLang";
import {GL_ACT_COINS, GL_CH_ALL_PR, GL_MK_PR, GL_MKTS, GL_TT_MK} from "../../constants/ApiConstants";
import {Badge, Container, Form, Spinner} from "react-bootstrap";
import {getNumRedAfterDoot} from "../../functions/getNumRedAfterDoot";
import {getMainCoin} from "../GeneralInfo/GeneralInfo";
import {getTheme} from "../../functions/Theme/getTheme";
import {setTheme} from "../../functions/Theme/setTheme";
import {setLang} from "../../functions/Lang/setLang";

//css
import './NavbarInfo.css';

const NavbarInfo = ({theme}) => {

    //data
    const data = useApi(GLOBAL_API_GLOBAL_COMMAND).data.data;
    // console.log(data,"GLOBAL DATA IN GeneralInfo.jsx");

    //SPINNER!!!!!
    const SpinnerSmall = <Spinner animation="border" size="sm" variant={"primary"} />;

    if(data && Object.values(data).length)
    return (
        <Container className={`NavbarInfo ${theme}`}>

            <div className="info-block d-flex">
                <p className={"small"}>
                    {getLang() === 'rus' && 'Монет:'}
                    {getLang() === 'eng' && 'Coins:'}
                    <strong> {data[GL_ACT_COINS] ? data[GL_ACT_COINS].toLocaleString("RU") : SpinnerSmall}</strong>
                </p>

                <p className={"small"}>
                    {getLang() === 'rus' && 'Бирж:'}
                    {getLang() === 'eng' && 'Exchanges:'}
                    <strong> {data[GL_MKTS] ? data[GL_MKTS] : SpinnerSmall} </strong>
                </p>

                <p className={"small d-flex align-items-center"}>
                    {getLang() === 'rus' && 'Рын. кап:'}
                    {getLang() === 'eng' && 'Market cap:'}
                    <strong className={"mx-1"}>
                        {data[GL_TT_MK]['usd'] ? data[GL_TT_MK]['usd'].toLocaleString("RU") + '$' : SpinnerSmall}
                    </strong>
                    {
                        data[GL_CH_ALL_PR] &&
                        <Badge className={"mx-1 fw-light"} bg={String(data[GL_CH_ALL_PR]).startsWith('-') ? "danger" : "success"}>
                            {!String(data[GL_CH_ALL_PR]).startsWith('-') && '+'}
                            {getNumRedAfterDoot(data[GL_CH_ALL_PR],2) + '% (24h)'}
                        </Badge>
                    }
                </p>

                <p className={"small"}>
                    {
                        Object.values(data[GL_MK_PR]).length ?
                            <>
                                {getLang() === 'rus' && 'Доминирование'}
                                {getLang() === 'eng' && 'Dominance'}
                                <strong style={{marginLeft:5}}>{getMainCoin(data[GL_MK_PR],'coin').toUpperCase("RU") + ":"}</strong>
                                <strong>{getMainCoin(data[GL_MK_PR],'price').toLocaleString("RU") + '%'}</strong>
                            </> : SpinnerSmall
                    }
                </p>
            </div>

            <div className={"theme-lang"}>
                {/*set theme*/}
                <img
                    src={`/images/theme/${getTheme(true)}.svg`}
                    alt="theme"
                    onClick={() => setTheme()}
                />

                {/*set lang*/}
                <Form.Select
                    className={theme}
                    size="sm"
                    value={getLang()}
                    onChange={e => setLang(e.target.value)}
                >
                    <option value={'eng'}>Eng</option>
                    <option value={'rus'}>Rus</option>
                </Form.Select>
            </div>

        </Container>
    );
};

export default NavbarInfo;
