import React from 'react';

const Header = ({skills, projects, about, contacts}) => {
    return (
        <header className="header">
            <div className="header-content">

                <div className="header-articles">
                    <a href="#skills">{skills}</a>
                    <a href="#projects">{projects}</a>
                    <a href="#about">{about}</a>
                    <a href="#contacts">{contacts}</a>
                </div>
            </div>
        </header>
    );
};

export default Header;