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

const PaginateCoinsSort = ({data,setDataSort}) => {

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
                        {transform: 'rotate(180deg)',transition:'.3s',marginLeft:5}
                        :
                        {transition:'.3s',marginLeft:5}
                }
                width={12}
                src="/images/general-svg/arrow.svg"
                alt="arrow"
            />
        )
    }

    return (
        <tr>
            <th>
                <Button size={"sm"} onClick={() => sortCoinsNumsData(GL_MC_RANK,sortCheck[0],0)}>
                    #
                    {imgArrow(sortCheck[0])}
                </Button>
            </th>
            <th>
                <Button size={"sm"} disabled={true}>
                    {getLang() === "rus" && "Название"}
                    {getLang() === "eng" && "Name"}
                </Button>
            </th>
            <th>
                <Button size={"sm"} onClick={() => sortCoinsNumsData(GL_CUR_PRICE,sortCheck[2],2)}>
                    {getLang() === "rus" && "Акт. цена"}
                    {getLang() === "eng" && "Act. price"}
                    {imgArrow(sortCheck[2])}
                </Button>
            </th>
            <th>
                <Button size={"sm"} onClick={() => sortCoinsNumsData(GL_CH_PR_1H_PR,sortCheck[3],3)}>
                    {getLang() === "rus" && "1ч"}
                    {getLang() === "eng" && "1h"}
                    {imgArrow(sortCheck[3])}
                </Button>
            </th>
            <th>
                <Button size={"sm"} onClick={() => sortCoinsNumsData(GL_CH_PR_24H_PR,sortCheck[4],4)}>
                    {getLang() === "rus" && "24ч"}
                    {getLang() === "eng" && "24h"}
                    {imgArrow(sortCheck[4])}
                </Button>
            </th>
            <th>
                <Button size={"sm"} onClick={() => sortCoinsNumsData(GL_CH_PR_7D_PR,sortCheck[5],5)}>
                    {getLang() === "rus" && "7д"}
                    {getLang() === "eng" && "7d"}
                    {imgArrow(sortCheck[5])}
                </Button>
            </th>
            <th>
                <Button size={"sm"} disabled={true}>
                    {getLang() === "rus" && "Мин/Макс 24ч"}
                    {getLang() === "eng" && "Min/Max 24h"}
                </Button>
            </th>
            <th>
                <Button size={"sm"} onClick={() => sortCoinsNumsData(GL_TT_VOL,sortCheck[7],7)}>
                    {getLang() === "rus" && "Объем торгов 24ч"}
                    {getLang() === "eng" && "Trading volume 24h"}
                    {imgArrow(sortCheck[7])}
                </Button>
            </th>
            <th>
                <Button size={"sm"} onClick={() => sortCoinsNumsData(GL_MK,sortCheck[8],8)}>
                    {getLang() === "rus" && "Рын. кап-ция"}
                    {getLang() === "eng" && "Market cap"}
                    {imgArrow(sortCheck[8])}
                </Button>
            </th>
            <th>
                <Button size={"sm"} disabled={true}>
                    {getLang() === "rus" && "График 3д"}
                    {getLang() === "eng" && "Graph 3d"}
                </Button>
            </th>
        </tr>
    );
};

export default PaginateCoinsSort;