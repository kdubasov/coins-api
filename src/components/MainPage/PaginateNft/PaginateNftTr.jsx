import React from 'react';
import {GL_NAME, GL_SYMBOL, GL_THUMB} from "../../../constants/ApiConstants";
import PaginateCoinsBriefcaseButton from "../PaginateCoins/PaginateCoinsBriefcaseButton";
import {Link} from "react-router-dom";

const PaginateNftTr = ({id,data,setShowAlert,sizePage,currentPage}) => {

    // console.log(data,'data in PaginateNftTr');

    return (
        <tr className={"small"}>
            {/*id and briefcase button*/}
            <td className={"first"}>
                <p className={"small opacity-50"}>
                    #{(id + 1) + (sizePage * (currentPage - 1))}
                </p>

                {/*add with check to BriefcaseDB button*/}
                <PaginateCoinsBriefcaseButton elemId={data['id']} setShowAlert={setShowAlert} table={'nfts'} title={'Nft'} />
            </td>

            {/*img*/}
            <td>
                {
                    data[GL_THUMB] !== "missing_thumb.png" ?
                        <img
                            src={data[GL_THUMB]}
                            alt={data[GL_NAME] && data[GL_NAME]}
                        />:
                        <p className="m-0 small">
                            No image
                        </p>
                }
            </td>

            {/*title*/}
            <td>
                <div className={"d-flex align-items-end"}>
                    <Link to={`/nft/${data['id']}`}>
                        {data[GL_NAME]}
                    </Link>
                    <p className={"m-0 mx-2 small opacity-50"}>({data[GL_SYMBOL]})</p>
                </div>
            </td>
        </tr>
    );
};

export default PaginateNftTr;
