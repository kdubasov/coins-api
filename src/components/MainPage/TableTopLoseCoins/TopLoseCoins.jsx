import React, {useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_COIN_LIST_ALL} from "../../../constants/ApiCommand";
import TopLoseCoinsTable from "./TopLoseCoinsTable";
import {Form} from "react-bootstrap";
import {GL_CH_PR_1H_PR, GL_CH_PR_24H_PR, GL_CH_PR_7D_PR} from "../../../constants/ApiConstants";
import {getLang} from "../../../functions/Lang/getLang";
import SpinnerAlert from "../../../general-components/Alerts/SpinnerAlert";

//css
import "./TopLoseCoins.css";
import {getTheme} from "../../../functions/Theme/getTheme";

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
        <div className={`TopLoseCoins ${getTheme(true)} container`}>
            <h4 className={'m-0'}>
                {getLang() === 'rus' && 'Топ лучших/худших монет.'}
                {getLang() === 'eng' && 'Top best/worst coins.'}
            </h4>

            <p className={'mb-3 small'}>
                {getLang() === 'rus' && 'Рейтинг популярных монет, которые максимально выросли/упали в цене за определенный промежуток времени.'}
                {getLang() === 'eng' && 'Rating of popular coins that have increased/decreased in price as much as possible over a certain period of time.'}
            </p>

            {/*выбираем по какому времени сортировать таблицы*/}
            <Form.Select
                size={"sm"}
                value={selectSort}
                onChange={e => setSelectSort(e.target.value)}
            >
                {getOption(GL_CH_PR_1H_PR,getLang() === 'rus' ? "Сортировать за 1ч" : "Sort by 1h")}
                {getOption(GL_CH_PR_24H_PR,getLang() === 'rus' ? "Сортировать за 24ч" : "Sort by 24h")}
                {getOption(GL_CH_PR_7D_PR,getLang() === 'rus' ? "Сортировать за 7д" : "Sort by 7d")}
            </Form.Select>

            {
                //check result and show spinner or table with coins
                Object.keys(data).length?
                    <div className={"w-100 d-flex justify-content-between"}>
                        <div className={"container-table"}>
                            <h6 className={"top"}>
                                {getLang() === 'rus' && 'Список валют, наиболее выросших в цене.'}
                                {getLang() === 'eng' && 'List of currencies that appreciated the most.'}
                            </h6>
                            <TopLoseCoinsTable selectSort={selectSort} data={data} sort={'min'} />
                        </div>

                        <div className={"container-table"}>
                            <h6 className={"lose"}>
                                {getLang() === 'rus' && 'Список валют, наиболее упавших в цене.'}
                                {getLang() === 'eng' && 'List of currencies that have fallen the most in value.'}
                            </h6>
                            <TopLoseCoinsTable selectSort={selectSort} data={data} sort={'max'} />
                        </div>
                    </div>
                    :
                    <SpinnerAlert />
            }
        </div>
    );
};

export default TopLoseCoins;
