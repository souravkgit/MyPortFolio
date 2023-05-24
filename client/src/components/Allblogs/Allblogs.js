import React from "react";
import "./Allblogs.scss";
import Footer from "../Footer/Footer";
import web_hosting from "./Blogs/Hosting NodeJs Application/web-hosting.jpeg";

const Allblogs = () => {
    window.onload = () => {
        var parentElement = document.getElementsByClassName('blog-post');
        for (let index = 0; index < parentElement.length; index++) {
            const childElements = parentElement[index];
            var parentRect = childElements.getBoundingClientRect();
            if (parentRect.top < window.innerHeight && parentRect.bottom >= 0) {
                childElements.classList.add('inmy-view');
            }
        }
    };
    document.addEventListener('scroll', function () {
        var parentElement = document.getElementsByClassName('blog-post');
        for (let index = 0; index < parentElement.length; index++) {
            const childElements = parentElement[index];
            var parentRect = childElements.getBoundingClientRect();
            if (parentRect.top < window.innerHeight && parentRect.bottom >= 0) {
                childElements.classList.add('inmy-view');
            }
        }
    });
    return (
        <div className="web-allblogs" id="web-allblogs">
            <div className="blogs-navbar">
                <div className="blog-nav">
                    <div className="blogs-logo">
                        My Blogs
                    </div>
                    <div className="blogs-menu">
                        <a href="/">Home</a>
                    </div>
                </div>
            </div>
            <div className="blogs-container">
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                {/* <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="thumbnail">
                        <img src={web_hosting} alt="" />
                    </div>
                    <div className="blog-title">
                        <div className="title">
                            Hosting Your Node Application
                        </div>
                    </div>
                    <div className="blog-details">
                        <div className="details">
                            <time dateTime="2023-05-24 20:00">24 May 2023</time>
                            <h4>/</h4>
                            <a href="/blogs/blog-link">Link</a>
                        </div>
                    </div>
                </div>*/}
            </div>
            <Footer />
        </div>
    );
}

export default Allblogs;