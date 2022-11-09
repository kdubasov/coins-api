import React from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {
    GL_CL_ISS,
    GL_COMM_4W, GL_COMM_GRAPH, GL_DEV_FORKS,
    GL_DEV_STARS,
    GL_DEV_SUBS,
    GL_TOT_ISS
} from "../../../../constants/ApiConstants";
import DevGraph from "./DevGraph";

const Developers = ({data}) => {

    // console.log(data,'Developers data');
    // console.log( data[GL_COMM_GRAPH],'DevGraph data');

    //for get list item
    const getListItem = (value,text) =>{
        if (value){
            return(
                <ListGroup.Item>
                    {text}: <strong>{value ? value : '?'}</strong>
                </ListGroup.Item>
            )
        }else return false;
    }

    return (
        <div className={`Developers my-3 p-3 border`}>
            <h4><Badge>Информация о разработке</Badge></h4>
            {
                data?
                    <>
                        <ListGroup horizontal>
                            {getListItem(data[GL_DEV_STARS],'Звезды')}
                            {getListItem(data[GL_DEV_SUBS],'Подписчики')}
                            <ListGroup.Item>
                                Вопросы (закрытые/всего):
                                <strong>
                                    {' ' + data[GL_CL_ISS]} / {data[GL_TOT_ISS]}
                                </strong>
                            </ListGroup.Item>
                            {getListItem(data[GL_COMM_4W],'Коммиты (1мес)')}
                            {getListItem(data[GL_DEV_FORKS],'Форки')}
                        </ListGroup>

                        {   //массив все равно будет но с нулями или пустой поэтому такая проверка
                            Boolean(
                                (data[GL_COMM_GRAPH].length) &&
                                (data[GL_COMM_GRAPH][0] !== 0 || data[GL_COMM_GRAPH][1] !== 0 || data[GL_COMM_GRAPH][2] !== 0)
                            ) &&
                                <DevGraph data={data[GL_COMM_GRAPH]} />
                        }
                    </>
                :''
            }

        </div>
    );
};

export default Developers;
