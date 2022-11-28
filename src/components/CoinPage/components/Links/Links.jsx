import React from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {
    GL_CHATS,
    GL_LINK_BLCKCHN, GL_LINK_GITHUB,
    GL_LINK_HOMEPAGE,
    GL_LINK_OFF_FORUM,
    GL_LINK_REDDIT,
    GL_LINK_REPOS, GL_TWIT_NAME
} from "../../../../constants/ApiConstants";

//css
import "./Links.css";
import {getLang} from "../../../../functions/Lang/getLang";
import {getTheme} from "../../../../functions/Theme/getTheme";

const Links = ({data}) => {

    // console.log(data,'Links coin');

    const getLink = url =>{
        if (!url){
            return false;
        }else {
            return(
                <a rel={"noreferrer"} target={"_blank"} href={url}>
                    <Badge bg={getTheme(true)}>
                        {url.slice(8,url.length)}
                    </Badge>
                </a>
            )
        }
    }

    return (
        <div className={`Links ${getTheme(true)}`}>
            <h5>
                {getLang() === "eng" && "Interest links"}
                {getLang() === "rus" && "Полезные ссылки"}
            </h5>
            <ListGroup horizontal>
                <ListGroup.Item>
                    <p className={"small"}>
                        {getLang() === "eng" && "Blockchain websites"}
                        {getLang() === "rus" && "Блокчеин сайты"}
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    {getLink(data[GL_LINK_BLCKCHN][0])}<br />
                    {getLink(data[GL_LINK_BLCKCHN][1])}<br />
                    {getLink(data[GL_LINK_BLCKCHN][2])}
                </ListGroup.Item>
            </ListGroup>

            {
                data[GL_CHATS][0] &&
                <ListGroup horizontal>
                    <ListGroup.Item>
                        <p className={"small"}>
                            {getLang() === "eng" && "Chats"}
                            {getLang() === "rus" && "Чаты"}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {getLink(data[GL_CHATS][0])}<br />
                        {getLink(data[GL_CHATS][1])}<br />
                        {getLink(data[GL_CHATS][2])}
                    </ListGroup.Item>
                </ListGroup>
            }

            <ListGroup horizontal>
                <ListGroup.Item>
                    <p className={"small"}>
                        {getLang() === "eng" && "Homepages"}
                        {getLang() === "rus" && "Домашние страницы"}
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    {getLink(data[GL_LINK_HOMEPAGE][0])}<br/>
                    {getLink(data[GL_LINK_HOMEPAGE][1])}<br/>
                    {getLink(data[GL_LINK_HOMEPAGE][2])}
                </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item>
                    <p className={"small"}>
                        {getLang() === "eng" && "Official forums"}
                        {getLang() === "rus" && "Оффициальные форумы"}
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    {getLink(data[GL_LINK_OFF_FORUM][0])}<br/>
                    {getLink(data[GL_LINK_OFF_FORUM][1])}<br/>
                    {getLink(data[GL_LINK_OFF_FORUM][2])}
                </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item>
                    <p className={"small"}>GitHub</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    {getLink(data[GL_LINK_REPOS][GL_LINK_GITHUB][0])}<br/>
                    {getLink(data[GL_LINK_REPOS][GL_LINK_GITHUB][1])}
                </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item>
                    <p className={"small"}>Reddit</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    {getLink(data[GL_LINK_REDDIT])}
                </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item>
                    <p className={"small"}>Twitter nickname</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Badge bg={getTheme(true)}>
                        {data[GL_TWIT_NAME] && data[GL_TWIT_NAME]}
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Links;
