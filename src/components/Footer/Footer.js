import React from 'react';
import "./Footer.scss";


const Footer = () => {
    return (<footer>
        <ul className="foot-wrapper" style={{ margin: "0", padding: "0" }}>
            <li className="icon reddit">
                <span className="tooltip">Reddit</span>
                <span><i className="fab fa-reddit" >
                    <a href="https://reddit.com/u/Upper1Demon" target='_blank' rel="noopener noreferrer">

                    </a></i></span>
            </li>
            <li className="icon twitter">
                <span className="tooltip">Twitter</span>
                <span >
                    <i className="fab fa-twitter">
                        <a href="https://twitter.com/Upper1_Demon" target='_blank' rel="noopener noreferrer">

                        </a>
                    </i>
                </span>
            </li>
            <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <span><i className="fab fa-instagram"><a href="https://www.instagram.com/mrweirdo.me/" target='_blank' rel="noopener noreferrer">

                </a></i></span>
            </li>
            <li className="icon github">
                <span className="tooltip">Github</span>
                <span><i className="fab fa-github"><a href="https://github.com/souravkgit" target='_blank' rel="noopener noreferrer">

                </a></i></span>
            </li>
            <li className="icon telegram">
                <span className="tooltip">Telegram</span>
                <span><i className="fab fa-telegram"><a href="https://t.me/GoyalCompany" target='_blank' rel="noopener noreferrer">

                </a></i></span>
            </li>
        </ul>
    </footer >)
}

export default Footer;