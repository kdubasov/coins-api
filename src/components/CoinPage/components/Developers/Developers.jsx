import React from 'react';
import {
    GL_CL_ISS,
    GL_COMM_4W, GL_COMM_GRAPH, GL_DEV_FORKS,
    GL_DEV_STARS,
    GL_DEV_SUBS,
    GL_TOT_ISS
} from "../../../../constants/ApiConstants";
import DevGraph from "./DevGraph";
import {getLang} from "../../../../functions/Lang/getLang";
import {getTheme} from "../../../../functions/Theme/getTheme";

//css
import "./Developers.css";
import "./DevelopersMedia.css";

const Developers = ({data}) => {

    // console.log(data,'Developers data');
    // console.log( data[GL_COMM_GRAPH],'DevGraph data');

    //for get list item
    const getListItem = (value,text) =>{
        return(
            <div className={"inner"}>
                <h5>{value ? value : '?'}</h5>
                <p className={"small"}>{text}</p>
            </div>
        )
    }

    return (
        <div className={`Developers ${getTheme(true)}`}>
            <h4>
                {getLang() === "eng" && "Development Information"}
                {getLang() === "rus" && "Информация о разработке"}
            </h4>

            {
                data?
                    <>
                        <div className={'dev-blocks-container'}>
                            {getListItem(data[GL_DEV_STARS],getLang() === "eng" ? 'Stars' : 'Звезды')}
                            {getListItem(data[GL_DEV_SUBS],getLang() === "eng" ? 'Subscribers' : 'Подписчики')}
                            <div className={'inner'}>
                                <h5>
                                    {data[GL_CL_ISS]} / {data[GL_TOT_ISS]}
                                </h5>
                                <p className="small">
                                    {getLang() === "eng" && "Questions (closed/total)"}
                                    {getLang() === "rus" && "Вопросы (закрытые/всего)"}
                                </p>
                            </div>
                            {getListItem(data[GL_COMM_4W],getLang() === "eng" ? 'Commits (1 month)' : 'Коммиты (1мес)')}
                            {getListItem(data[GL_DEV_FORKS],getLang() === "eng" ? 'Forks' : 'Форки')}
                        </div>

                        {/*график с коммитами*/}
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
