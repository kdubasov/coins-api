import React from 'react';
import {Button} from "react-bootstrap";

const TickersTableShowMore = ({showMore,setShowMore}) => {
    return (
        <div className={"w-100 d-flex justify-content-center"}>
            <Button size={"sm"} onClick={() => setShowMore(!showMore)}>
                {showMore? "Скрыть":"Показать еще"}
            </Button>
        </div>
    );
};

export default TickersTableShowMore;
