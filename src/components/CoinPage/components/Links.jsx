import React from 'react';
import {ListGroup} from "react-bootstrap";
import {
    GL_LINK_BLCKCHN, GL_LINK_GITHUB,
    GL_LINK_HOMEPAGE,
    GL_LINK_OFF_FORUM,
    GL_LINK_REDDIT,
    GL_LINK_REPOS
} from "../../../constants/ApiConstants";

const Links = ({data}) => {

    // console.log(data)

    const getLink = url =>{
        return(
            <a rel={"noreferrer"} target={"_blank"} href={url}>{url}</a>
        )
    }

    return (
        <ListGroup className={`Links`} as="ul">
            {
                data[GL_LINK_BLCKCHN][0] &&
                data[GL_LINK_HOMEPAGE][0] &&
                data[GL_LINK_REPOS][GL_LINK_GITHUB][0] &&
                data[GL_LINK_OFF_FORUM][0] &&
                data[GL_LINK_REDDIT] ?
                    <>
                        <ListGroup.Item as="li" active>
                            Полезные ссылки
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            {getLink(data[GL_LINK_BLCKCHN][0])}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            {getLink(data[GL_LINK_HOMEPAGE][0])}<br/>
                            {getLink(data[GL_LINK_REPOS][GL_LINK_GITHUB][0])}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            {getLink(data[GL_LINK_OFF_FORUM][0])}<br/>
                            {getLink(data[GL_LINK_REDDIT])}
                        </ListGroup.Item>
                    </>
                    :''
            }
        </ListGroup>
    );
};

export default Links;