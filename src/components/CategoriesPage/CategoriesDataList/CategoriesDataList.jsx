import React, {useEffect, useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_CATEGORIES_LIST_ALL} from "../../../constants/ApiCommand";
import {GL_MK, GL_MKCH_24H, GL_NAME, GL_VOL_24H} from "../../../constants/ApiConstants";
import {getLang} from "../../../functions/Lang/getLang";
import {getTheme} from "../../../functions/Theme/getTheme";
import {Badge} from "react-bootstrap";

//css
import "./CategoriesDataList.css";
import "./CategoriesDataListMedia.css";

const CategoriesDataList = ({name}) => {

    //for one category
    const [value,setValue] = useState({});

    const data = useApi(GLOBAL_API_CATEGORIES_LIST_ALL).data;
    // console.log(data,'GLOBAL_API_CATEGORIES_LIST_ALL data');

    useEffect(() => {
        if (data.length){
            setValue(data.find(elem => elem[GL_NAME] === name))
        }

        //eslint-disable-next-line
    },[data,name])

    // console.log(value);

    if (data.length){
        return (
            <div className={`CategoriesDataList ${getTheme(true)}`}>

                <div className="inner">
                    <p className="small">
                        {getLang() === "eng" && "Market cap"}
                        {getLang() === "rus" && "Рыночная капитализация"}
                    </p>
                    <h5>
                        {value[GL_MK] ? value[GL_MK].toLocaleString("RU") + "$" : "-"}
                    </h5>
                </div>

                <div className="inner">
                    <p className="small">
                        {getLang() === "eng" && "Market cap change 24h"}
                        {getLang() === "rus" && "Изменение рыночной капитализации за 24ч"}
                    </p>
                    <h5>
                        {
                            value[GL_MKCH_24H] ?
                                <Badge bg={value[GL_MKCH_24H] > 0 ? "success" : "danger"}>
                                    {value[GL_MKCH_24H] > 0 && "+"}
                                    {value[GL_MKCH_24H].toLocaleString("RU") + "$"}
                                </Badge>:
                                "-"
                        }
                    </h5>
                </div>

                <div className="inner">
                    <p className="small">
                        {getLang() === "eng" && "24h volume"}
                        {getLang() === "rus" && "Объем торгов 24ч"}
                    </p>
                    <h5>{value[GL_VOL_24H] ? value[GL_VOL_24H].toLocaleString("RU") + "$" : "-"}</h5>
                </div>

            </div>
        );
    }
};

export default CategoriesDataList;
