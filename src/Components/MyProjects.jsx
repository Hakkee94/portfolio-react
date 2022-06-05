import React from 'react';
import SemiDivs from "./SemiDivs";
import OtherProjects from "./OtherProjects";

const MyProjects = () => {
    return (
        <div>
            <div className="projects-article">
                <h1>Проекты</h1>
            </div>

            {/*<div className="first-project">*/}
            {/*    <div className="first-project-position">*/}
            {/*        <div>*/}
            {/*            <h2>Интернет магазин</h2>*/}
            {/*            <h3>Какой-то текст</h3>*/}
            {/*        </div>*/}

            {/*        <div className="project-button">*/}
            {/*            <a href="https://github.com/Hakkee94/David-layout/tree/dev/Internet-shop"*/}
            {/*               className="btn-grad">Посмотреть</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            <div className='first-project'>
                <OtherProjects fullProject title='Интернет магазин' info='какой-то текст' link='https://github.com/Hakkee94/David-layout/tree/dev/Internet-shop'/>
            </div>

            <SemiDivs/>
        </div>
    );
};

export default MyProjects;