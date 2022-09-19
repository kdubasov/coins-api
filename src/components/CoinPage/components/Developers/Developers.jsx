import React from 'react';
import {ListGroup} from "react-bootstrap";
import {
    GL_CL_ISS,
    GL_COMM_4W, GL_COMM_GRAPH,
    GL_DEV_STARS,
    GL_DEV_SUBS,
    GL_TOT_ISS
} from "../../../../constants/ApiConstants";
import DevGraph from "./DevGraph";

const Developers = ({data}) => {

    // console.log(data)

    return (
        <div className={`Developers mt-4 mb-3`}>
            {
                data?
                    <>
                        <ListGroup>
                            <ListGroup.Item active={true}>Информация о разработке</ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item>
                                Звезды: <strong>{data[GL_DEV_STARS]}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Подписчики: <strong>{data[GL_DEV_SUBS]}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Вопросы (закрытые/всего):
                                <strong>
                                    {' ' + data[GL_CL_ISS]} / {data[GL_TOT_ISS]}
                                </strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Коммиты 1мес: <strong>{data[GL_COMM_4W]}</strong>
                            </ListGroup.Item>
                        </ListGroup>

                        {
                            data[GL_COMM_GRAPH].length?
                                <DevGraph data={data[GL_COMM_GRAPH]} />
                                :''
                        }
                    </>
                :''
            }

        </div>
    );
};

export default Developers;