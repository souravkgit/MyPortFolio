import React from "react";
import "./Allblogs.scss";
import Footer from "../Footer/Footer";
import VacantPage from "./VacantPage";
import MainPage from "./MainPage";
import { useEffect, useState } from "react";
import Onload from "../Onload/Onload";


const Allblogs = ({ host }) => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        setLoading(true);
        async function getBlogs() {
            const response = await fetch(host + "blogs/");
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            if (response) {
                const blogs = await response.json();
                setBlogs(blogs);
            }
            return;
        }
        getBlogs();
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);
    setTimeout(() => {
        if (loading === false) {
            var parentElement = document.getElementsByClassName('blog-post');
            for (let index = 0; index < parentElement.length; index++) {
                const childElements = parentElement[index];
                var parentRect = childElements.getBoundingClientRect();
                if (parentRect.top < window.innerHeight && parentRect.bottom >= 0) {
                    childElements.classList.add('inmy-view');
                }
            }
        }
    }, 500)

    function CheckBlogs(blogsArray) {
        if (blogsArray && blogsArray !== [] && blogsArray.blogs && blogsArray.blogs.length > 0) {
            return <MainPage blogs={blogsArray.blogs} />;
        }
        else {
            return <VacantPage />
        }
    }

    return (

        loading ? (
            <Onload />
        ) : (
            <>
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
                    <div className="main-blogs-holder">

                        <CheckBlogs blogs={blogs} />

                    </div>
                    <Footer />
                </div>
            </>
        )


    );
}

export default Allblogs;