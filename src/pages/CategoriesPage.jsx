import React from 'react';
import {useLastWordPath} from "../functions/useLastWordPath";

const CategoriesPage = () => {

    const categoriesId = useLastWordPath()

    return (
        <div className={`CategoriesPage`}>
            <h3 className={'m-3'}>{categoriesId}</h3>
        </div>
    );
};

export default CategoriesPage;