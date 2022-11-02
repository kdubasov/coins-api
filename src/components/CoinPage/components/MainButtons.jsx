import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import PaginateCoinsBriefcaseButton from "../../MainPage/PaginateCoins/PaginateCoinsBriefcaseButton";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const MainButtons = ({setShowAlert,coinId}) => {

    const handleCopy = () => {
        setShowAlert({show:true,text:"Ссылка скопирована.",variant:"success"})
        setTimeout(() => setShowAlert({show:false,text:"",variant:""}),3000)
    }

    return (
        <ButtonGroup size={"sm"}>
            {/*add with check to BriefcaseDB button*/}
            <PaginateCoinsBriefcaseButton elemId={coinId} setShowAlert={setShowAlert} />

            {/*скопироавть ссылку*/}
            <CopyToClipboard text={window.location.href}>
                <Button onClick={() => handleCopy()}>
                    Поделиться
                </Button>
            </CopyToClipboard>
        </ButtonGroup>
    );
};

export default MainButtons;
