import React from 'react';
import OtherProjects from "./OtherProjects";

const SemiDivs = () => {
    return (
        <div className="semi-divs">
            <OtherProjects fullProject title='Интернет магазин' info='Приложение интернет-магазина, написанное с помощью HTML, CSS, JS с функциями добавления и удаления названий, цен, изображений товаров' link='https://github.com/Hakkee94/David-layout/tree/dev/Internet-shop'/>
            <OtherProjects title='Figma land' info='Проект, созданный по макету Figma' link='https://github.com/Hakkee94/David-layout/tree/dev/homework/Figma-land'/>
            <OtherProjects title='Ryan Warner' info='Проект, созданный по макету Figma' link='https://github.com/Hakkee94/David-layout/tree/dev/homework/Ryan%20Warner'/>
            <OtherProjects title='Underwater hotel' info='Проект, созданный по макету Figma' link='https://hakkee94.github.io/underground-hotel/'/>
        </div>
    );
}

export default SemiDivs;