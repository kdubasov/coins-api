import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {
    GL_CUR_PRICE,
    GL_CH_PR_1H_PR,
    GL_CH_PR_24H_PR,
    GL_CH_PR_7D_PR,
    GL_TT_VOL,
    GL_MK, GL_MC_RANK
} from "../../../constants/ApiConstants";
import {getLang} from "../../../functions/Lang/getLang";
import {getTheme} from "../../../functions/Theme/getTheme";

const PaginateCoinsSort = ({data,setDataSort}) => {

    const theme = getTheme(true);

    const [sortCheck,setSortCheck] = useState([false,false,false,false,false,false,false,false,false])

    //function for sort (ПО ЧИСЛОВЫМ ЗНАЧЕНИЯМ)
    const sortCoinsNumsData = async (hrName,method,id) =>{
        await setDataSort(null)

        //for sortCheck for arrow button
        const dataSortCheck = Object.assign([],sortCheck)
        dataSortCheck[id] = !method;
        setSortCheck(dataSortCheck)

        if (method){
            setDataSort(data.sort((a,b) => b[hrName] - a[hrName]))//сортирует с максимального числа к минимальному
        } else {
            setDataSort(data.sort((a,b) => a[hrName] - b[hrName]))//сортирует с минимального числа к максимальному
        }
    }

    //for img arrow in button
    const imgArrow = active =>{
        return(
            <img
                style={
                    active?
                        {transform: 'rotate(180deg)',transition:'.3s',marginLeft:5} :
                        {transition:'.3s',marginLeft:5}
                }
                width={8}
                src={`/images/general-svg/arrow-${theme}.svg`}
                alt="arrow"
            />
        )
    }

    return (
        <tr className={"small"}>
            <td>
                <Button
                    className={`but-no-redact ${theme}`}
                    size={"sm"}
                    onClick={() => sortCoinsNumsData(GL_MC_RANK,sortCheck[0],0)}
                >
                    #{imgArrow(sortCheck[0])}
                </Button>
            </td>
            <td>
                <Button className={`but-no-redact ${theme}`} size={"sm"} disabled>
                    {getLang() === "rus" && "Название"}
                    {getLang() === "eng" && "Name"}
                </Button>
            </td>
            <td>
                <Button
                    size={"sm"}
                    onClick={() => sortCoinsNumsData(GL_CUR_PRICE,sortCheck[2],2)}
                    className={`but-no-redact ${theme}`}
                >
                    {getLang() === "rus" && "Цена"}
                    {getLang() === "eng" && "Price"}
                    {imgArrow(sortCheck[2])}
                </Button>
            </td>
            <td>
                <Button
                    size={"sm"}
                    onClick={() => sortCoinsNumsData(GL_CH_PR_1H_PR,sortCheck[3],3)}
                    className={`but-no-redact ${theme}`}
                >
                    {getLang() === "rus" && "1ч"}
                    {getLang() === "eng" && "1h"}
                    {imgArrow(sortCheck[3])}
                </Button>
            </td>
            <td>
                <Button
                    className={`but-no-redact ${theme}`}
                    size={"sm"}
                    onClick={() => sortCoinsNumsData(GL_CH_PR_24H_PR,sortCheck[4],4)}
                >
                    {getLang() === "rus" && "24ч"}
                    {getLang() === "eng" && "24h"}
                    {imgArrow(sortCheck[4])}
                </Button>
            </td>
            <td>
                <Button
                    size={"sm"}
                    onClick={() => sortCoinsNumsData(GL_CH_PR_7D_PR,sortCheck[5],5)}
                    className={`but-no-redact ${theme}`}
                >
                    {getLang() === "rus" && "7д"}
                    {getLang() === "eng" && "7d"}
                    {imgArrow(sortCheck[5])}
                </Button>
            </td>
            <td>
                <Button className={`but-no-redact ${theme}`} size={"sm"} disabled={true}>
                    {getLang() === "rus" && "Мин/Макс 24ч"}
                    {getLang() === "eng" && "Min/Max 24h"}
                </Button>
            </td>
            <td>
                <Button
                    size={"sm"}
                    onClick={() => sortCoinsNumsData(GL_TT_VOL,sortCheck[7],7)}
                    className={`but-no-redact ${theme}`}
                >
                    {getLang() === "rus" && "Объем 24ч"}
                    {getLang() === "eng" && "Volume 24h"}
                    {imgArrow(sortCheck[7])}
                </Button>
            </td>
            <td>
                <Button
                    size={"sm"}
                    onClick={() => sortCoinsNumsData(GL_MK,sortCheck[8],8)}
                    className={`but-no-redact ${theme}`}
                >
                    {getLang() === "rus" && "Рын. кап-ция"}
                    {getLang() === "eng" && "Mkt cap"}
                    {imgArrow(sortCheck[8])}
                </Button>
            </td>
            <td>
                <Button className={`but-no-redact ${theme}`} size={"sm"} disabled={true}>
                    {getLang() === "rus" && "График 3д"}
                    {getLang() === "eng" && "Graph 3d"}
                </Button>
            </td>
        </tr>
    );
};

export default PaginateCoinsSort;
