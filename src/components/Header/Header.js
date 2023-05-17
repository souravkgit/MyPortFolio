import React from 'react';
import "./Header.scss"


const Header = () => {
    function translback() {
        document.getElementById("menu-items").style.transform = "translate(-150%)";
        let ele2 = document.getElementsByClassName("line")
        ele2[0].style.transform = 'rotate(0deg)';
        ele2[1].style.transform = 'rotate(0deg)';
        ele2[2].style.transform = 'rotate(0deg)';
    }
    function translfor() {
        let ele2 = document.getElementsByClassName("line")
        if (ele2[0].style.transform === "rotate(45deg)") {
            document.getElementById("menu-items").style.transform = "translate(-150%)";
            ele2[0].style.transform = 'rotate(0deg)';
            ele2[1].style.transform = 'rotate(0deg)';
            ele2[2].style.transform = 'rotate(0deg)';

        }
        else {
            document.getElementById("menu-items").style.transform = "translate(0)";
            ele2[0].style.transform = 'rotate(45deg)';
            ele2[1].style.transform = 'scaleY(0)';
            ele2[2].style.transform = 'rotate(-45deg)';

        }
    }
    return (
        <nav>
            <div className="small-navbar">
                <div className="mob-container nav-container">
                    <div className="hamburger-lines" onClick={translfor}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="mob-logo">
                        <div className="mob-text">
                            PortFolio
                        </div>
                        <div className="mob-img">
                            <img className="mymob-logo" src={require("../../utils/mylogo.png")} alt="logo" />
                        </div>
                    </div>
                    <div className="menu-items" id="menu-items">
                        <a className="web-ref" href='#web-home' onClick={translback}>Home</a>
                        <a className="web-ref" href='#web-about' onClick={translback}>About</a>
                        <a className="web-ref" href='#web-project' onClick={translback}>Projects</a>
                        <a className="web-ref" href='#web-blog' onClick={translback}>Blogs</a>
                        <a className="web-ref" href='#web-contact' onClick={translback}>Contact</a>
                    </div>
                </div>
            </div>
            <div className="big-navbar">
                <div className="web-header" >
                    <div className="web-logo">
                        <div className="web-img">
                            <img className="myweb-logo" src={require("../../utils/mylogo.png")} alt="logo" />
                        </div>
                        <div className="web-text">
                            PortFolio
                        </div>
                    </div>
                    <div className="web-refs">
                        <a className="web-ref" href='#web-home'>Home</a>
                        <a className="web-ref" href='#web-about'>About</a>
                        <a className="web-ref" href='#web-project'>Projects</a>
                        <a className="web-ref" href='#web-blog'>Blogs</a>
                        <a className="web-ref" href='#web-contact'>Contact</a>

                    </div>
                </div>
            </div>
        </nav>
    )
};
export default Header;