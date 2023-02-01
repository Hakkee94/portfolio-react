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
                <OtherProjects fullProject title='Сайт курса для беременных' info='Сайт, написанный с помощью HTML, CSS, JS' link='https://hakkee94.github.io/pregnancy-course/'/>
                <OtherProjects fullProject title='Приложение корма для котиков' info='Приложение, написанное с помощью react, с возможностью выбора нескольких позиций' link='https://feed-cats-app.vercel.app/'/>
                <OtherProjects fullProject title='Next js приложение поиска пива по названию' info='Приложение, написанное с помощью react, next js, typescript' link='https://beer-app-hakkee94.vercel.app/'/>
                <OtherProjects fullProject title='Redux приложение' info='Интернет магазин ноутбуков, написанный на React+Redux, использовался redux-toolkit' link='https://hakkee94.github.io/redux-cart-shop/'/>
                <OtherProjects fullProject title='Приложение Яндекса на Tilda' info='Сайт, написанный на шаблонизаторе Tilda' link='http://yandex-scooter994.tilda.ws/'/>
                <OtherProjects fullProject title='Интернет магазин' info='Приложение интернет-магазина, написанное с помощью HTML, CSS, JS с функциями добавления и удаления названий, цен, изображений товаров' link='https://hakkee94.github.io/Internet-shop-app/'/>
                <OtherProjects fullProject title='Сайт курса для женщин после беременности' info='Сайт, написанный с помощью HTML, CSS, JS' link='https://hakkee94.github.io/afterpregnancy-course/'/>
            </div>

            <SemiDivs/>
        </div>
    );
};

export default MyProjects;