import React from 'react';
import * as imgs from '../img/index.js'

const Footer = () => {
    return (
        <footer>
            <div>
                <h3>Developed by David Agasyan. Type set in system-ui.</h3>
            </div>

            <div className="footer-images">
                <div>
                    <img className="footer-img" src={imgs.telegram}/>
                </div>

                <div>
                    <img className="footer-img" src={imgs.github}/>
                </div>

                <div>
                    <img className="footer-img" src={imgs.vk}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;