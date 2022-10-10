import React from 'react';
import SkillItem from "./SkillItem";
import * as imgs from '../img/index.js'

const FirstContent = () => {
    return (
        <div className="first-content" id='skills'>
            <div className="introduction">
                <h1>Меня зовут Давид Агасян, я фронтенд разработчик.</h1>
            </div>

            <div className='skill-items'>
                <div className="skill">
                    <h2>Мои основные навыки</h2>
                </div>

                <div className="skill-list">
                    <SkillItem skill='Кроссбраузерная, валидная, семантичная, адаптивная верстка' src={imgs.HTML}/>
                    <SkillItem skill='Уверенные знания JavaScript (базовые ES6)' src={imgs.js}/>
                    <SkillItem skill='БЭМ, Bootstrap 3, CSS3, LESS, SASS' src={imgs.CSS3}/>
                    <SkillItem skill='React - уверенные знания' src={imgs.reactLogo}/>
                    <SkillItem skill='Redux - базовый уровнь' src='https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'/>
                    <SkillItem skill='TypeScript' src='https://cdn-icons-png.flaticon.com/512/919/919832.png'/>
                    <SkillItem skill='Опыт вёрстки сайтов и шаблонов по Figma' src={imgs.figma}/>
                    <SkillItem skill='Опыт работы с git, Github, IDE - WebStorm' src={imgs.github}/>
                    <SkillItem skill='Английский язык Upper Intermediate(B2)' src={imgs.English}/>
                </div>

            </div>
        </div>
    );
};

export default FirstContent;