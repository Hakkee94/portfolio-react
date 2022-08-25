import React from 'react';
import * as imgs from "../img";

const AboutMe = () => {
    return (
        <div className="about" id='about'>
            <div>
                <h1>Обо мне</h1>
            </div>

            <div>
                <h2 className="subtitle-tall">
                    Окончил РАНХиГС в 2015 году, факультет финансов и банковского дела. Работал в банках, в аудиторской компании (ФБК), позже в сфере коммерческой недвижимости.
                </h2>

                <h2 className="subtitle-tall">
                    Имею внушительный опыт в коммуникации с людьми, ответственен, легко нахожу общий язык. Пунктуален.
                </h2>

                <h2 className="last-subtitle">
                    Разработку открыл для себя интересной и многообещающей.
                    Начал индивидуальное обучение 1,5 года назад, постоянно практикуюсь и открываю для себя новые технологии в разработке.
                    Из последнего - активно постигаю Redux
                </h2>
            </div>

            <div>
                <h1>Контакты</h1>
            </div>

            <div className='contacts' id='contacts'>
                <h2 className="subtitle-tall">
                    Почта:
                    <a href="mailto:agasyandavid94@gmail.com">agasyandavid94@gmail.com</a>
                </h2>

                <h2 className="subtitle-tall">
                    Телефон:
                    <a href="tel:+79853349963">+7(985)334-99-63</a>
                </h2>

                <div className="footer-images">
                    <a href="https://telegram.me/Dave994">
                        <img className="footer-img" src={imgs.telegram}/>
                    </a>

                    <a href="https://github.com/Hakkee94">
                        <img className="footer-img" src={imgs.github}/>
                    </a>

                    <a href="https://vk.com/davo94">
                        <img className="footer-img" src={imgs.vk}/>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;