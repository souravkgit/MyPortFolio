import React from 'react';
import "./Project.scss"
import { useEffect, useState } from 'react';

const Project = (props) => {
    let projects = props.projects;
    const [leftCard, setleftCard] = useState(projects[0]);
    const [mainCard, setMidCard] = useState(projects[1]);
    const [rightCard, setrightCard] = useState(projects[2]);
    const [currIndex, setIndex] = useState(2);
    window.onload = () => {
        setIndex(2);
    };
    useEffect(() => {
        setTimeout(() => {
            if (currIndex === projects.length - 1) {
                setIndex(0);
                setleftCard(mainCard);
                setMidCard(rightCard);
                setrightCard(projects[0])
            } else {
                setIndex(currIndex + 1);
                setleftCard(mainCard);
                setMidCard(rightCard);
                setrightCard(projects[currIndex + 1])
            }
        }, 5000);
    }, [currIndex, mainCard, rightCard, projects]);

    return (
        <div id="web-project">
            <div className="project-container">
                <div className="project-cards">
                    <div className="project-card">
                        <div className="use-image">
                            <img className="project-image" src={leftCard.image} alt="" />
                        </div>
                        <div className="project-name">
                            {leftCard.name}
                        </div>
                        <div className="project-link">
                            <div className="my-btn" >
                                <a href={leftCard.url} target='_blank' rel="noopener noreferrer">Checkout</a>
                            </div>
                            <div className="my-btn">
                                <a href={leftCard.url} target='_blank' rel="noopener noreferrer">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card" id="mid-card">
                        <div className="use-image">
                            <img className="project-image" src={mainCard.image} alt="" />
                        </div>
                        <div className="project-name">
                            {mainCard.name}
                        </div>
                        <div className="project-link">
                            <div className="my-btn" >
                                <a href={mainCard.url} target='_blank' rel="noopener noreferrer">Checkout</a>
                            </div>
                            <div className="my-btn">
                                <a href={mainCard.url} target='_blank' rel="noopener noreferrer">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="use-image">
                            <img className="project-image" src={rightCard.image} alt="" />
                        </div>
                        <div className="project-name">
                            {rightCard.name}
                        </div>
                        <div className="project-link">
                            <div className="my-btn" >
                                <a href={rightCard.url} target='_blank' rel="noopener noreferrer">Checkout</a>
                            </div>
                            <div className="my-btn">
                                <a href={rightCard.url} target='_blank' rel="noopener noreferrer">More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Project;