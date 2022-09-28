import React from 'react';
import {Pagination} from "react-bootstrap";

const MyComponent = ({currentPage,setCurrentPage,allPages}) => {
    return (
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
    );
};

export default MyComponent;
