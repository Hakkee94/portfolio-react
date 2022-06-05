import React from 'react';
import OtherProjects from "./OtherProjects";

const SemiDivs = () => {
    return (
        <div className="semi-divs">
            <OtherProjects title='Figma land (Figma)' info='Какой-то текст' link='https://github.com/Hakkee94/David-layout/tree/dev/homework/Figma-land'/>
            <OtherProjects title='Ryan Warner (Figma)' info='Какой-то текст' link='https://github.com/Hakkee94/David-layout/tree/dev/homework/Ryan%20Warner'/>
            <OtherProjects title='Veles (Figma)' info='Какой-то текст' link='https://github.com/Hakkee94/David-layout/tree/dev/homework/Veles%20Figma'/>
            <OtherProjects title='Underwater hotel (Figma)' info='Какой-то текст' link=''/>
        </div>
    );
};

export default SemiDivs;