import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import PaginateCoinsBriefcaseButton from "../../../MainPage/PaginateCoins/PaginateCoinsBriefcaseButton";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {getLang} from "../../../../functions/Lang/getLang";
import {getTheme} from "../../../../functions/Theme/getTheme";

const MainButtons = ({setShowAlert,coinId,table,title}) => {

    const theme = getTheme(true);

    const handleCopy = () => {
        setShowAlert({show:true,text:"Ссылка скопирована.",variant:"success"})
        setTimeout(() => setShowAlert({show:false,text:"",variant:""}),3000)
    }

    return (
        <ButtonGroup size={"sm"} className={`MainButtons ${getTheme(true)}`}>
            {/*add with check to BriefcaseDB button*/}
            <PaginateCoinsBriefcaseButton
                elemId={coinId}
                setShowAlert={setShowAlert}
                table={table}
                title={title}
                text={true}
            />

            {/*скопироавть ссылку*/}
            <CopyToClipboard text={window.location.href}>
                <Button className={`but-${theme} border`} onClick={() => handleCopy()}>
                    {getLang() === "eng" && "Copy link"}
                    {getLang() === "rus" && "Поделиться"}
                </Button>
            </CopyToClipboard>
        </ButtonGroup>
    );
};

export default MainButtons;
