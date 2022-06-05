import React from 'react';

const OtherProjects = ({title, info, link, fullProject}) => {
    return (
        <div className={fullProject ? 'first-project-position': "other-projects"}>
            <div>
                <h2>{title}</h2>
                <h3>{info}</h3>
            </div>

            <div className="project-button">
                <a href={link}
                   className="btn-grad">Посмотреть</a>
            </div>
        </div>
    );
};

export default OtherProjects;