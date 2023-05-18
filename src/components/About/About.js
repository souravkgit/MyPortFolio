import React from 'react';
import "./About.scss"


const About = () => {
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
                <div className="completedata">
                    <div className="about-box">
                        <div className="skills">
                            Skills
                            <div className="allskills">
                                <div className="skill">
                                    <div className="skilltext">HTML 80%</div>
                                    <div className="progress" style={{ width: "100%" }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">CSS 70%</div>
                                    <div className="progress" style={{ width: "100%" }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">JS 95%</div>
                                    <div className="progress" style={{ width: "100%" }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">ReactJs 40%</div>
                                    <div className="progress" style={{ width: "100%" }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="40"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">NodeJs 70%</div>
                                    <div className="progress" style={{ width: "100%" }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skilltext">Telethon 70%</div>
                                    <div className="progress" style={{ width: "100%" }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70"
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