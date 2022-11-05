import React from 'react';
import {
    GL_FL_PR, GL_IMAGE, GL_MC_RANK, GL_MK,
    GL_NAME, GL_NFT_NAT_CUR, GL_NFT_PERSENT_24H,
    GL_SYMBOL, GL_TT_CNS, GL_VOL_24H
} from "../../../../constants/ApiConstants";
import PaginateCoinsBriefcaseButton from "../../../../components/MainPage/PaginateCoins/PaginateCoinsBriefcaseButton";
import {Link} from "react-router-dom";
import PaginateChangeTd from "../../../../components/MainPage/PaginateCoins/PaginateChangeTd";
import {Badge} from "react-bootstrap";

const SavedNftsTr = ({elem,setShowAlert}) => {

    // console.log(elem,'data in SavedNftsTr');

    return (
        <tr>
            {/*id*/}
            <td>
                {elem[GL_MC_RANK] && '#' + elem[GL_MC_RANK]}
                {/*add with check to BriefcaseDB button*/}
                <PaginateCoinsBriefcaseButton elemId={elem['id']} setShowAlert={setShowAlert} table={'nfts'} title={'nft'} />
            </td>

            {/*img and name*/}
            <td>
                <Link style={{color:"inherit"}} to={`/nft/${elem.id}`}>
                    <img style={{width:35,marginRight:5}} src={elem[GL_IMAGE]?.small} alt={elem[GL_NAME]}/>
                    {elem[GL_SYMBOL]?.toUpperCase()} ({elem[GL_NAME] && elem[GL_NAME]})
                </Link>
            </td>

            {/*floor price*/}
            <td>{elem[GL_FL_PR]['usd'] && elem[GL_FL_PR]['usd'].toLocaleString("RU")}</td>

            {/*price change 24 hours*/}
            <PaginateChangeTd value={elem[GL_NFT_PERSENT_24H]} text={'%'} />

            {/*market cap*/}
            <td>
                {elem[GL_MK]['usd'] && elem[GL_MK]['usd'].toLocaleString("RU") + '$'}
            </td>

            {/*vol 24h*/}
            <td>
                {elem[GL_VOL_24H]['usd'] && elem[GL_VOL_24H]['usd'].toLocaleString("RU") + '$'}
            </td>

            {/*coin*/}
            <td>
                {
                    elem[GL_NFT_NAT_CUR] &&
                        <Link className={'mx-1'} to={`/coins/${elem[GL_NFT_NAT_CUR]}`}>
                            <Badge>{elem[GL_NFT_NAT_CUR]}</Badge>
                        </Link>
                }
            </td>

            {/*общее предложение*/}
            <td>
                {elem[GL_TT_CNS] && elem[GL_TT_CNS].toLocaleString("RU")}
            </td>
        </tr>
    );
};

export default SavedNftsTr;
