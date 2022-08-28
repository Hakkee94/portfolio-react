import React from 'react';
import SemiDivs from "./SemiDivs";
import OtherProjects from "./OtherProjects";

const MyProjects = () => {
    return (
        <div id='projects'>
            <div className="projects-article">
                <h1>Проекты</h1>
            </div>

            <div className='first-project'>
                <OtherProjects fullProject title='Redux приложение' info='Интернет магазин ноутбуков, написанный на React+Redux, использовался redux-toolkit' link='https://hakkee94.github.io/redux-cart-shop/'/>

            </div>

            <SemiDivs/>
        </div>
    );
};

export default MyProjects;