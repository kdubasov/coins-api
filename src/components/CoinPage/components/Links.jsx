import React from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {
    GL_CHATS,
    GL_LINK_BLCKCHN, GL_LINK_GITHUB,
    GL_LINK_HOMEPAGE,
    GL_LINK_OFF_FORUM,
    GL_LINK_REDDIT,
    GL_LINK_REPOS
} from "../../../constants/ApiConstants";

const Links = ({data}) => {

    // console.log(data,'Links coin');

    const getLink = url =>{
        return(
            <a rel={"noreferrer"} target={"_blank"} href={url}>{url}</a>
        )
    }

    return (
        <ListGroup className={`Links`}>
            <Badge>
                Полезные ссылки
            </Badge>
            <ListGroup.Item as="li">
                <Badge bg={"secondary"}>Блокчеин сайты</Badge><br />
                {getLink(data[GL_LINK_BLCKCHN][0]) ?? ''}<br />
                {getLink(data[GL_LINK_BLCKCHN][1]) ?? ''}<br />
                {getLink(data[GL_LINK_BLCKCHN][2]) ?? ''}
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <Badge bg={"secondary"}>Чаты</Badge><br />
                {getLink(data[GL_CHATS][0]) ?? ''}<br />
                {getLink(data[GL_CHATS][1]) ?? ''}<br />
                {getLink(data[GL_CHATS][2]) ?? ''}
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <Badge bg={"secondary"}>Домашние страницы</Badge><br />
                {getLink(data[GL_LINK_HOMEPAGE][0]) ?? ''}<br/>
                {getLink(data[GL_LINK_HOMEPAGE][1]) ?? ''}<br/>
                {getLink(data[GL_LINK_HOMEPAGE][2]) ?? ''}<br/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <Badge bg={"secondary"}>Оффициальные форумы</Badge><br />
                {getLink(data[GL_LINK_OFF_FORUM][0])  ?? ''}<br/>
                {getLink(data[GL_LINK_OFF_FORUM][1])  ?? ''}<br/>
                {getLink(data[GL_LINK_OFF_FORUM][2])  ?? ''}<br/>
                {/*{getLink(data[GL_LINK_REDDIT])  ?? ''}*/}
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <Badge bg={"secondary"}>Репозитории GitHub</Badge><br />
                {getLink(data[GL_LINK_REPOS][GL_LINK_GITHUB][0])  ?? ''}<br/>
                {getLink(data[GL_LINK_REPOS][GL_LINK_GITHUB][1])  ?? ''}<br/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <Badge bg={"secondary"}>Reddit</Badge><br />
                {getLink(data[GL_LINK_REDDIT])  ?? ''}
            </ListGroup.Item>
        </ListGroup>
    );
};

export default Links;