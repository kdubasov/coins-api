import React from 'react';
import {GL_IMAGE, GL_NAME} from "../../constants/ApiConstants";

const MainData = ({dataMain}) => {
    return (
        <div className={`MainData nft`}>
            <h4 className={'mt-3 mb-3'}>
                <img
                    width={100}
                    style={{marginRight:15,borderRadius:5}}
                    src={dataMain[GL_IMAGE]['small' || 'large']}
                    alt={dataMain[GL_NAME]}
                />
                {dataMain[GL_NAME]}
            </h4>
        </div>
    );
};

export default MainData;
