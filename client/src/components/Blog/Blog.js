import React from 'react';
import "./Blog.scss"


const Blog = () => {
    document.addEventListener('scroll', function () {
        var parentElement = document.getElementById('blog-box');
        var childElements = parentElement.getElementsByClassName('blog-template');

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
    function chngclass() {
        const arrow = document.querySelector('.next-page-arrow');
        arrow.classList.add('clicked');
        const holder = document.querySelector('.page-to-icon');
        holder.classList.add('clicked');
        const ptext = document.querySelector('.page-to-text');
        ptext.classList.add('clicked');
        setTimeout(() => {
            window.location.href = '/blogs';
        }, 3000);
    }

    return (
        <div id="web-blog">
            <div className="blog-box" id='blog-box'>
                <div className="demo-blog">
                    <div className="blog-template">
                        <div className="blog-image">
                            <img className="blog-demo-image" src={require("../../utils/demo1.jpg")} alt="" />
                        </div>
                        <div className="blog-title">My Blogs</div>
                        <div className="blog-other">
                            <div className="blog-date">19-05-2023</div>
                            <div className="blog-explore" onClick={() => { window.location.href = '/blogs' }}>Explore</div>
                        </div>
                    </div>
                </div>
                <div className="blog-page">
                    <div className="page-to-icon" onClick={chngclass}>
                        {/* <a href="/" className="next-page-arrow"></a> */}
                        <div className="page-to-text">Let's Goo!!</div>
                        <div className="next-page-arrow">&#8594;</div>
                    </div>
                    {/* #08244c */}
                </div>
            </div>
        </div>
    )
};
export default Blog;