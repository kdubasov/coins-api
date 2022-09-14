import React from 'react';
import {Button} from "react-bootstrap";
import {
    GL_CUR_PRICE,
    GL_CH_PR_1H_PR,
    GL_CH_PR_24H_PR,
    GL_CH_PR_7D_PR,
    GL_TT_VOL,
    GL_MK
} from "../../constants/ApiConstants";

const PaginateSort = ({sortCoinsNumsData}) => {

    return (
        <tr>
            <th>
                <Button>
                    #
                </Button>
            </th>
            <th>
                <Button>
                    Название
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_CUR_PRICE)}>
                    Акт. цена
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_CH_PR_1H_PR)}>
                    За 1 час
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_CH_PR_24H_PR)}>
                    За 24 часа
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_CH_PR_7D_PR)}>
                    За 7 дней
                </Button>
            </th>
            <th>
                <Button disabled={true}>
                    Мин/Макс 24ч
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_TT_VOL)}>
                    Об. торг. 24 часа
                </Button>
            </th>
            <th>
                <Button onClick={() => sortCoinsNumsData(GL_MK)}>
                    Рыночная кап-ция
                </Button>
            </th>
        </tr>
    );
};

export default PaginateSort;