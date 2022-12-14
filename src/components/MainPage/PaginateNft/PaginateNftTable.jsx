import React, {useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_SEARCH} from "../../../constants/ApiCommand";
import {Table} from "react-bootstrap";
import {getTheme} from "../../../functions/Theme/getTheme";
import PaginationButtons from "../../../general-components/PaginationButtons/PaginationButtons";
import PaginateNftTr from "./PaginateNftTr";
import {getLang} from "../../../functions/Lang/getLang";
import SpinnerAlert from "../../../general-components/Alerts/SpinnerAlert/SpinnerAlert";

//css
import "./PaginateNftTable.css";
import "./PaginateNftTableMedia.css";

const PaginateNftTable = ({setShowAlert}) => {

    const dataSearch = useApi(GLOBAL_API_SEARCH('')).data;
    // console.log(dataSearch);

    //for paginate (nfts)
    const [currentPage,setCurrentPage] = useState(1)
    const [sizePage] = useState(50)

    // const data = useApi(GLOBAL_API_NFTS_LIST_ALL(sizePage,currentPage)).data;
    // console.log(data,'NFTS LIST')

    if (Object.values(dataSearch).length && dataSearch.nfts.length){
        return (
            <div>
                <Table className={`table-nft ${getTheme(true)}`}>
                    <thead>
                        <tr className={"small"}>
                            <th>#</th>
                            <th>{getLang() === "eng" ? 'Image' : 'Картинка'}</th>
                            <th>{getLang() === "eng" ? 'Link, title and symbol' : 'Ссылка, название и символ'}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        (dataSearch.nfts)
                            .slice((currentPage - 1) * sizePage,(currentPage) * sizePage)
                            .map((nft,id) => (
                            <PaginateNftTr key={id} id={id} data={nft} setShowAlert={setShowAlert} currentPage={currentPage} sizePage={sizePage} />
                        ))
                    }
                    </tbody>
                </Table>

                <PaginationButtons
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    allPages={Math.ceil((dataSearch.nfts).length / sizePage)}
                />
            </div>
        );
    }else {
        return (
            <SpinnerAlert />
        )
    }
};

export default PaginateNftTable;
