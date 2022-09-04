import React, {useState} from 'react';
import {useApi} from "../functions/useApi";
import {GLOBAL_API_COIN_LIST_ALL_30D} from "../constants/ApiCommand";
import {Pagination} from "react-bootstrap";

const PaginateCoins = () => {

    //paginate
    const [currentPage,setCurrentPage] = useState(1);
    const [sizePage] = useState(10);
    const [allPages] = useState(Math.ceil(10000/sizePage));

    //data
    const data = useApi(GLOBAL_API_COIN_LIST_ALL_30D(sizePage,currentPage)).data;
    console.log(data,'Data for coins (PaginateCoins)');

    const listCoinsOnePage = data.map((elem) =>(
        <div className="mt-2 mb-2" key={elem.id}>
            <img style={{width:25}} src={elem.image} alt=""/>
            {elem.name}
        </div>
    ));

    return (
        <div className="p-3 m-3" style={{border:"1px solid #555"}}>

            <div className="mb-5">
                {listCoinsOnePage}
            </div>

            <Pagination>
                <Pagination.Prev
                    disabled={currentPage===1}
                    onClick={() => setCurrentPage(currentPage -1)}
                />

                {//if currentPage===1 not show dots in start
                    currentPage===1? '' :
                    <>
                        <Pagination.Item onClick={() => setCurrentPage(1)}>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                    </>
                }


                <Pagination.Item active>{currentPage}</Pagination.Item>

                {//if currentPage===allPages not show dots in end
                    currentPage===allPages?'':
                    <>
                        <Pagination.Ellipsis />
                        <Pagination.Item onClick={() => setCurrentPage(allPages)}>{allPages}</Pagination.Item>
                    </>
                }

                <Pagination.Next
                    disabled={currentPage===allPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                />
            </Pagination>
        </div>
    );
};

export default PaginateCoins;