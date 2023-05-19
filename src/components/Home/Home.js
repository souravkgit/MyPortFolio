import React from 'react';
import "./Home.scss"


const Home = () => {
    // document.addEventListener("DOMContentLoaded", function () {
    //     var childElements = document.getElementsByClassName('welcome-msg');
    //     for (var i = 0; i < childElements.length; i++) {
    //         childElements[i].classList.add('in-view');
    //     }
    // });
    var childElements = document.getElementsByClassName('welcome-msg');
    window.setTimeout(function () {
        for (var i = 0; i < childElements.length; i++) {
            childElements[i].classList.add('in-view');
        }
    }, 500);
    return (
        <div className="home-container" id='web-home'>
            <div className="name-holder-ele">
                <div className="name" id="my-name">
                    <div>E</div>
                    <div>M</div>
                    <div>O</div>
                    <div>C</div>
                    <div>L</div>
                    <div>E</div>
                    <div>W</div>
                </div>
            </div>
            <div className="my-welcome-msg-holder">

                <div className="my-welcome-msg">
                    <div className="welcome-msg small-text">Hello, my name is</div>
                    <div className="welcome-msg large-text">Sourav Goyal</div>
                    <div className="welcome-msg work-text">And I'm a <span> Developer</span></div>
                </div>
            </div>
        </div>
    )
};
export default Home;