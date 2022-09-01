import React from 'react';
import OtherProjects from "./OtherProjects";

const SemiDivs = () => {
    return (
        <div className="semi-divs">
            <OtherProjects fullProject title='Интернет магазин' info='Приложение интернет-магазина, написанное с помощью HTML, CSS, JS с функциями добавления и удаления названий, цен, изображений товаров' link='https://hakkee94.github.io/Internet-shop-app/'/>
            <OtherProjects title='Figma land' info='Проект, созданный по макету Figma' link='https://hakkee94.github.io/Figma-project1/'/>
            <OtherProjects title='Underwater hotel' info='Проект, созданный по макету Figma' link='https://hakkee94.github.io/Figma-project2/'/>
            <OtherProjects title='Ryan Warner' info='Проект, созданный по макету Figma' link='https://hakkee94.github.io/Figma-project3/'/>
        </div>
    );
}

export default SemiDivs;