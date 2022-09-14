import React from 'react';
import {Button} from "react-bootstrap";
import {
    GL_CUR_PRICE,
    GL_CH_PR_1H_PR,
    GL_CH_PR_24H_PR,
    GL_CH_PR_7D_PR,
    GL_TT_VOL,
    GL_MK, GL_MC_RANK
} from "../../constants/ApiConstants";

const PaginateSort = ({data,setDataSort}) => {

    //function for sort
    // max сортирует с максимального числа к минимальному
    // min сортирует с минимального числа к максимальному
    const sortCoinsNumsData = async (hrName,method) =>{
        await setDataSort(null)
        if (method === 'max'){
            setDataSort(data.sort((a,b) => b[hrName] - a[hrName]))
        } else {
            setDataSort(data.sort((a,b) => a[hrName] - b[hrName]))
        }
    }

    return (
        <tr>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_MC_RANK,'max')}>
                    #
                </Button>
            </th>
            <th>
                <Button>
                    Название
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_CUR_PRICE,'max')}>
                    Акт. цена
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_CH_PR_1H_PR,'max')}>
                    За 1 час
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_CH_PR_24H_PR,'max')}>
                    За 24 часа
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_CH_PR_7D_PR,'max')}>
                    За 7 дней
                </Button>
            </th>
            <th>
                <Button disabled={true}>
                    Мин/Макс 24ч
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_TT_VOL,'max')}>
                    Об. торг. 24 часа
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_MK,'max')}>
                    Рыночная кап-ция
                </Button>
            </th>
        </tr>
    );
};

export default PaginateSort;