import React from 'react';
import {Pagination} from "react-bootstrap";
import {getTheme} from "../../functions/Theme/getTheme";

// css
import "./PaginationButtons.css";
import "./PaginationButtonsMedia.css";

const PaginationButtons = ({currentPage,setCurrentPage,allPages}) => {

    return (
        <div className={"PaginationButtons"}>
            <Pagination size={"sm"} className={getTheme(true)}>
                <Pagination.Prev
                    disabled={currentPage ===1 }
                    onClick={() => setCurrentPage(currentPage -1)}
                />

                {//if currentPage===1 not show dots in start
                    currentPage !== 1 &&
                    <>
                        <Pagination.Item onClick={() => setCurrentPage(1)}>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                    </>
                }

                {/*промежуточные цифры*/}
                {//if currentPage > 4 not show dots in start
                    currentPage > 4 &&
                    <Pagination.Item onClick={() => setCurrentPage(currentPage - 3)}>{currentPage - 3}</Pagination.Item>
                }
                {//if currentPage > 3 not show dots in start
                    currentPage > 3 &&
                    <Pagination.Item onClick={() => setCurrentPage(currentPage - 2)}>{currentPage - 2}</Pagination.Item>
                }
                {//if currentPage > 2 not show dots in start
                    currentPage > 2 &&
                    <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</Pagination.Item>
                }

                <Pagination.Item active>{currentPage}</Pagination.Item>

                {/*промежуточные цифры*/}
                {//if currentPage > 2 not show dots in start
                    currentPage < (allPages - 2) &&
                    <Pagination.Item onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</Pagination.Item>
                }
                {//if currentPage > 3 not show dots in start
                    currentPage < (allPages - 3) &&
                    <Pagination.Item onClick={() => setCurrentPage(currentPage + 2)}>{currentPage + 2}</Pagination.Item>
                }
                {//if currentPage > 4 not show dots in start
                    currentPage < (allPages - 4) &&
                    <Pagination.Item onClick={() => setCurrentPage(currentPage + 3)}>{currentPage + 3}</Pagination.Item>
                }

                {//if currentPage===allPages not show dots in end
                    currentPage!==allPages &&
                    <>
                        <Pagination.Ellipsis />
                        <Pagination.Item onClick={() => setCurrentPage(allPages)}>{allPages}</Pagination.Item>
                    </>
                }

                <Pagination.Next
                    disabled={currentPage === allPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                />
            </Pagination>
        </div>
    );
};

export default PaginationButtons;
