import React from 'react';
import {getLang} from "../../../functions/Lang/getLang";
import PaginateNftTable from "./PaginateNftTable";

const PaginateNft = ({setShowAlert}) => {

    return (
        <div className={`PaginateNft container`}>
            <h4 className={'mb-0'}>NFT</h4>

            <p className={"small"}>
                {getLang() === 'rus' && 'На данной странице показан список всех nft. Для более подробной информации о nft вы можете перейти по ссылке из списка.'}
                {getLang() === 'eng' && 'This page shows a list of all nft. For more details about nft you can follow the link from the list.'}
            </p>

            <PaginateNftTable setShowAlert={setShowAlert} />

        </div>
    );
};

export default PaginateNft;
