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
                <OtherProjects fullProject title='Интернет магазин' info='какой-то текст' link='https://github.com/Hakkee94/David-layout/tree/dev/Internet-shop'/>
            </div>

            <SemiDivs/>
        </div>
    );
};

export default MyProjects;