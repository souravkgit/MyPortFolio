import React from "react";

const Blog = (props) => {

    return (
        <div className="blog-post">
            <div className="thumbnail">
                <img src={props.record.image} alt="" />
            </div>
            <div className="blog-title">
                <div className="title">
                    {props.record.title}
                </div>
            </div>
            <div className="blog-details">
                <div className="details">
                    <time dateTime={props.record.readdate}>{props.record.date}</time>
                    <h4>/</h4>
                    <a href={props.record.url}>Link</a>
                </div>
            </div>
        </div>
    );
}


const MainPage = (props) => {
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
    function blogList() {
        if (props.blogs.length > 0) {
            return props.blogs.map((blog) => {
                return (
                    <Blog
                        record={blog}
                        key={blog._id}
                    />
                );
            });
        }
    }
    return (<div className="blogs-container">
        {blogList()}
    </div>)
}

export default MainPage;

// var currentdate = new Date();
// var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
//     + "/" + currentdate.getFullYear() + " @ "
//     + currentdate.getHours() + ":"
//     + currentdate.getMinutes() + ":" + currentdate.getSeconds();