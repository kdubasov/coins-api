import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import PaginateCoinsBriefcaseButton from "../../MainPage/PaginateCoins/PaginateCoinsBriefcaseButton";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const MainButtons = ({setShowAlert,coinId}) => {
    return (
        <ButtonGroup size={"sm"}>
            {/*add with check to BriefcaseDB button*/}
            <PaginateCoinsBriefcaseButton elemId={coinId} setShowAlert={setShowAlert} />

            {/*скопироавть ссылку*/}
            <CopyToClipboard text={window.location.href}>
                <Button onClick={() => setShowAlert({show:true,text:"Ссылка скопирована.",variant:"success"})}>
                    Поделиться
                </Button>
            </CopyToClipboard>
        </ButtonGroup>
    );
};

export default MainButtons;
