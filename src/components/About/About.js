import React from 'react';
import "./About.scss"


const About = () => {
    document.addEventListener('scroll', function () {
        var parentElement = document.getElementById('completedata');
        var childElements = parentElement.getElementsByClassName('progress-bar');

        var parentRect = parentElement.getBoundingClientRect();

        if (parentRect.top < window.innerHeight && parentRect.bottom >= 0) {
            for (var i = 0; i < childElements.length; i++) {
                childElements[i].classList.add('in-view');
            }
        } else {
            for (var j = 0; j < childElements.length; j++) {
                childElements[j].classList.remove('in-view');
            }
        }
    });
    return (
        <div id="web-about">
            <div className="about myborder">
                <div className="my-card my-photo">
                    <div className="my-wrapper">
                        <img src={require("../../utils/myimage.png")} alt='' className="cover-image my-image" />
                    </div>
                    <img src={require("../../utils/myimage.png")} alt='' className="my-character" />
                </div>
                <div className="details">
                    <div className="name detail">Name : Sourav Goyal</div>
                    <div className="contact detail">Contact : skgoyalofficial@gmail.com</div>
                    <div className="profession detail">Post : Web and Bot Developer</div>
                </div>
                <div className="completedata" id='completedata'>
                    <div className="about-box">
                        <div className="skills">
                            Skills
                            <div className="allskills">
                                <div className="skill">
                                    <div className="skilltext">HTML 80%</div>
                                    <div className="progress" style={{ width: "100%" }} id="one">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">CSS 70%</div>
                                    <div className="progress" style={{ width: "100%" }} id="two">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">JS 85%</div>
                                    <div className="progress" style={{ width: "100%" }} id="three">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">ReactJs 80%</div>
                                    <div className="progress" style={{ width: "100%" }} id="four">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">NodeJs 75%</div>
                                    <div className="progress" style={{ width: "100%" }} id="five">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">Telethon 70%</div>
                                    <div className="progress" style={{ width: "100%" }} id="six">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutme-box">
                        <div className="heading">
                            About Me
                        </div>
                        <div className="abtme-text">
                            Hi, I'm Sourav Goyal!, a talented web developer and bot developer, aspires to excel in automation, aiming for remarkable achievements.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default About;