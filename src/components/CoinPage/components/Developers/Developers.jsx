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

    // console.log(data,'Developers data')

    //for get list item
    const getListItem = (value) =>{
        if (value){
            return(
                <ListGroup.Item>
                    Звезды: <strong>{value}</strong>
                </ListGroup.Item>
            )
        }else return false;
    }

    return (
        <div className={`Developers mt-4 mb-3`}>
            {
                data?
                    <>
                        <ListGroup>
                            <ListGroup.Item active={true}>Информация о разработке</ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            {getListItem(data[GL_DEV_STARS])}
                            {getListItem(data[GL_DEV_SUBS])}
                            <ListGroup.Item>
                                Вопросы (закрытые/всего):
                                <strong>
                                    {' ' + data[GL_CL_ISS]} / {data[GL_TOT_ISS]}
                                </strong>
                            </ListGroup.Item>
                            {getListItem(data[GL_COMM_4W])}
                        </ListGroup>

                        {   //массив все равно будет но с нулями поэтому такая проверка
                            data[GL_COMM_GRAPH][0] === 0 && data[GL_COMM_GRAPH][1] !== 0?
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