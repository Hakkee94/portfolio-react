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
                <OtherProjects fullProject title='Рейтинг фильмов' info='Стэк: Nextjs, Reactjs, RTK, MUI, TS' link='https://filmlibrary.vercel.app/'/>
                <OtherProjects fullProject title='Список задач' info='Стэк: TS, Vite' link='https://typescript-todo-gamma.vercel.app/'/>
                <OtherProjects fullProject title='Сайт курсов для педагогов' info='Сайт, написанный с помощью HTML, CSS, JS' link='https://kpk-kpp.vercel.app/'/>
                <OtherProjects fullProject title='Сайт курсов для педагогов 2' info='Сайт, написанный с помощью HTML, CSS, JS' link='https://fgos-centre.vercel.app/'/>
                <OtherProjects fullProject title='Адаптивный сайт курса для женщин после беременности' info='Сайт, написанный с помощью HTML, CSS, JS' link='https://hakkee94.github.io/afterpregnancy-course/'/>
            </div>

            <SemiDivs/>
        </div>
    );
};

export default MyProjects;