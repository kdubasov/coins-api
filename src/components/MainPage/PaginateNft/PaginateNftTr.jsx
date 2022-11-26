import React from 'react';
import {GL_NAME, GL_SYMBOL, GL_THUMB} from "../../../constants/ApiConstants";
import PaginateCoinsBriefcaseButton from "../PaginateCoins/PaginateCoinsBriefcaseButton";
import {Link} from "react-router-dom";

const PaginateNftTr = ({id,data,setShowAlert,sizePage,currentPage}) => {

    // console.log(data,'data in PaginateNftTr');

    return (
        <tr className={"small"}>
            {/*id and briefcase button*/}
            <td>
                #{(id + 1) + (sizePage * (currentPage - 1))}

                <br />

                {/*add with check to BriefcaseDB button*/}
                <PaginateCoinsBriefcaseButton elemId={data['id']} setShowAlert={setShowAlert} table={'nfts'} title={'Nft'} />
            </td>

            {/*img*/}
            <td>
                <img
                    src={data[GL_THUMB]}
                    alt={data[GL_NAME] && data[GL_NAME]}
                    height={40}
                    style={{borderRadius:3}}
                />
            </td>

            {/*title*/}
            <td>
                <div className={"d-flex align-items-end"}>
                    <Link to={`/nft/${data['id']}`} className={"text-white"}>
                        {data[GL_NAME]}
                    </Link>
                    <p className={"m-0 mx-2 small opacity-50"}>({data[GL_SYMBOL]})</p>
                </div>
            </td>
        </tr>
    );
};

export default PaginateNftTr;
