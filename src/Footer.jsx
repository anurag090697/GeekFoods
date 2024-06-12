import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer>
            <div className='lgp'>
                <img src="..\public\assets\logo-3-1.svg" alt="Logo" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            </div>
            <div className='linksall'>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">History</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">Blog</a>
            </div>
            <div className='fonts'>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faDribbble} />
            </div>
        </footer>
    );
}

export default Footer;
