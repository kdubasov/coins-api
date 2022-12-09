import React, {useState} from 'react';
import {Button, Table} from "react-bootstrap";
import {getTheme} from "../../functions/Theme/getTheme";
import PaginateCoinsTr from "../../components/MainPage/PaginateCoins/PaginateCoinsTr";
import {useApi} from "../../hooks/useApi";
import {GLOBAL_API_COIN_LIST_ALL} from "../../constants/ApiCommand";
import {getLang} from "../../functions/Lang/getLang";
import {GL_TT_VOL} from "../../constants/ApiConstants";
import CoinsTableHeaderNoSort from "./CoinsTableHeaderNoSort";

//css
import "./TableBestCoins.css";

const TableBestCoins = ({setShowAlert}) => {

    const [showCoins,setShowCoins] = useState(10);

    //data (ADD ERROR CHECK)
    const data = useApi(GLOBAL_API_COIN_LIST_ALL(showCoins,1)).data;
    // console.log(data,'Data for coins (PaginateCoins)');

    const handleShowMore = () => {
        if (showCoins === 10) {
            setShowCoins(30)
        }else {
            setShowCoins(10)
        }
    }

    if (Object.keys(data).length)
    return (
        <div className={"TableBestCoins pb-4"}>

            <h4 className={'m-0 mb-2 mt-5'}>
                {getLang() === 'eng' && 'Top 10 coins by trading volume in 24 hours'}
                {getLang() === 'rus' && 'Топ 10 монет по объему торгов за 24 часа'}
            </h4>

            <Table className={getTheme(true)}>
                <thead>
                    <CoinsTableHeaderNoSort />
                </thead>

                <tbody>
                {
                    data
                        .sort((a,b) => Number(b[GL_TT_VOL]) - Number(a[GL_TT_VOL]))
                        .map(elem =>(
                        <PaginateCoinsTr key={elem.id} elem={elem} setShowAlert={setShowAlert} />
                    ))
                }
                </tbody>
            </Table>

            {/*show more button*/}
            <div className="d-flex justify-content-center">
                <Button size={"sm"} onClick={handleShowMore}>
                    {
                        showCoins === 10 ?
                            <>
                                {getLang() === 'eng' && "Show more"}
                                {getLang() === 'rus' && "Показать еще"}
                            </>:
                            <>
                                {getLang() === 'eng' && "Hide"}
                                {getLang() === 'rus' && "Скрыть"}
                            </>
                    }
                </Button>
            </div>
        </div>
    );
};

export default TableBestCoins;
