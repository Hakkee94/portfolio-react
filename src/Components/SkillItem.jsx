import React from 'react';

const SkillItem = ({skill, src}) => {
    return (
        <div className="logo-plus-text">
            <img className="skill-logo" src={src}/>
            <h3 className='start'>{skill}</h3>
        </div>
    );
};

export default SkillItem;