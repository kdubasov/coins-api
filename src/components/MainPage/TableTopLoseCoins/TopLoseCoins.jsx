import React, {useState} from 'react';
import {Badge, Spinner} from "react-bootstrap";
import {useApi} from "../../../functions/useApi";
import {GLOBAL_API_COIN_LIST_ALL} from "../../../constants/ApiCommand";
import TopLoseCoinsTable from "./TopLoseCoinsTable";
import {Form} from "react-bootstrap";
import {GL_CH_PR_1H_PR, GL_CH_PR_24H_PR, GL_CH_PR_7D_PR} from "../../../constants/ApiConstants";

const TopLoseCoins = () => {

    //general data
    const data = useApi(GLOBAL_API_COIN_LIST_ALL(250,1)).data;
    // console.log(data,'Data for coins (TopLoseCoins)');

    //for select sort timeshtamp
    const [selectSort,setSelectSort] = useState(GL_CH_PR_24H_PR)

    //for get option item in select
    const getOption = (value,text) =>{
        return (
            <option
                // selected={selectSort === value}
                value={value}
            >
                {text}
            </option>
        )
    }

    return (
        <div className={'TopLoseCoins container'}>
            <h3 className={'m-0'}><Badge>Топ лучших/худших монет.</Badge></h3>
            <p className={'mb-4'}>
                Рейтинг популярных монет, которые максимально выросли/упали в цене за 24 часа.
            </p>

            {/*выбираем по какому времени сортировать таблицы*/}
            <Form.Select
                size={"sm"}
                className={'w-25 mb-4'}
                value={selectSort}
                onChange={e => setSelectSort(e.target.value)}
            >
                {getOption(GL_CH_PR_1H_PR,"Сортировать за 1ч")}
                {getOption(GL_CH_PR_24H_PR,"Сортировать за 24ч")}
                {getOption(GL_CH_PR_7D_PR,"Сортировать за 7д")}
            </Form.Select>

            {
                //check result and show spinner or table with coins
                Object.keys(data).length?
                    <div className={"w-100 d-flex justify-content-between"}>
                        <div style={{width:"calc(50% - .3em)"}}>
                            <h6 className={"m-0"}>Список валют, наиболее выросших в цене</h6>
                            <TopLoseCoinsTable selectSort={selectSort} data={data} sort={'min'} />
                        </div>

                        <div style={{width:"calc(50% - .3em)"}}>
                            <h6 className={"m-0"}>Список валют, наиболее упавших в цене</h6>
                            <TopLoseCoinsTable selectSort={selectSort} data={data} sort={'max'} />
                        </div>
                    </div>
                    :
                    <Spinner animation={"border"} variant={"primary"} className={'mb-3'} />
            }
        </div>
    );
};

export default TopLoseCoins;
