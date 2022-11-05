import React, {useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {GLOBAL_API_NFTS_LIST_ALL} from "../../../constants/ApiCommand";
import {Badge, ListGroup, Spinner} from "react-bootstrap";
import {GL_NAME, GL_SYMBOL} from "../../../constants/ApiConstants";
import {Link} from "react-router-dom";
import PaginationButtons from "../PaginateCoins/PaginationButtons";
import PaginateCoinsBriefcaseButton from "../PaginateCoins/PaginateCoinsBriefcaseButton";

const PaginateNft = ({setShowAlert}) => {


    //for paginate (nfts)
    const [currentPage,setCurrentPage] = useState(1)
    const [sizePage] = useState(50)
    const [allNfts] = useState(1750)
    const [allPages] = useState(Math.ceil(allNfts/sizePage))

    const data = useApi(GLOBAL_API_NFTS_LIST_ALL(sizePage,currentPage)).data;
    // console.log(data,'NFTS LIST')

    return (
        <div className={`PaginateNft container`}>
            <h3 className={'mb-0'}><Badge>НФТ</Badge></h3>
            <p>На данной странице предоставлены все категории нфт</p>

            <ListGroup className={`my-2`}>
                {
                    Object.values(data).length?
                        Object.values(data).map((nft, ids) =>(
                            <ListGroup.Item
                                key={ids}
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="d-flex">
                                    {/*add with check to BriefcaseDB button*/}
                                    <PaginateCoinsBriefcaseButton elemId={nft['id']} setShowAlert={setShowAlert} table={'nfts'} title={'Nft'} />

                                    <div className="fw-bold mx-2">({nft[GL_SYMBOL]})</div>

                                    <Link to={`/nft/${nft["id"]}`}>
                                        {nft[GL_NAME]}
                                    </Link>
                                </div>


                                <Badge bg="primary" pill className={"mx-1"}>
                                    #{(ids + 1) + (50 * (currentPage - 1))}
                                </Badge>
                            </ListGroup.Item>
                        )):
                        <Spinner animation={"border"} variant={"primary"} />
                }
            </ListGroup>

            <PaginationButtons
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                allPages={allPages}
            />

        </div>
    );
};

export default PaginateNft;
