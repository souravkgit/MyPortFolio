import React from 'react';
import "./Blog.scss"


const Blog = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const blogTemplate = document.querySelector('.blog-template');
        const scrollElement = document.querySelector('.blog-box');
        function checkVisibility() {
            const rect = scrollElement.getBoundingClientRect();
            const isVisible = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );

            if (isVisible) {
                blogTemplate.style.display = 'block';
            } else {
                blogTemplate.style.display = 'none';
            }
        }
        document.addEventListener('scroll', checkVisibility);
    });
    return (
        <div id="web-blog">
            <div className="blog-box">
                <div className="demo-blog">
                    <div className="blog-template">

                    </div>
                </div>
                <div className="blog-page">
                    {/* #08244c */}
                </div>
            </div>
        </div>
    )
};
export default Blog;