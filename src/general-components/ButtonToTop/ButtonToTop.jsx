import React from 'react';
import {Button} from "react-bootstrap";
import {getTheme} from "../../functions/Theme/getTheme";

//css
import "./ButtonToTop.css";

const ButtonToTop = () => {

    const handleTop = () => {
        window.scrollTo(window.pageXOffset, 0);
    }

    return (
        <Button onClick={handleTop} className={`ButtonToTop but-${getTheme(true)}`}>
            <img src={`/images/general-svg/arrow-${getTheme(true)}.svg`} alt=""/>
        </Button>
    );
};

export default ButtonToTop;
