import React from 'react';
import {Button} from "react-bootstrap";
import {getLang} from "../../../../functions/Lang/getLang";

const TickersTableShowMore = ({showMore,setShowMore}) => {
    return (
        <div className={"w-100 d-flex justify-content-center"}>
            <Button size={"sm"} onClick={() => setShowMore(!showMore)}>
                {showMore?
                    (getLang() === "eng" ? "Hide" : "Скрыть"):
                    (getLang() === "eng" ? "Show more" : "Показать еще")
                }
            </Button>
        </div>
    );
};

export default TickersTableShowMore;
