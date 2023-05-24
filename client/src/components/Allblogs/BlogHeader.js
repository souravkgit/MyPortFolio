import React from "react";
import "./BlogHeader.scss";

const BlogHeader = () => {
    return (
        <div className="blogs-navbar">
            <nav>
                <div className="blogs-logo">
                    My Blogs
                </div>
                <div className="blogs-menu">
                    <link onClick={() => { window.location.href = '/' }}>Home</link>
                </div>
            </nav>
        </div>
    )
};