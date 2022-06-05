import React from 'react';

const Header = ({skills, projects, about, contacts}) => {
    return (
        <header className="header">
            <div className="header-content">

                <div className="header-articles">
                    <h3>{skills}</h3>
                    <h3>{projects}</h3>
                    <h3>{about}</h3>
                    <h3>{contacts}</h3>
                </div>
            </div>
        </header>
    );
};

export default Header;