import React from "react";
import "./Allblogs.scss";
import Footer from "../Footer/Footer";
import VacantPage from "./VacantPage";
import MainPage from "./MainPage";
import { useEffect, useState } from "react";
import Onload from "../Onload/Onload";


const Allblogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function getBlogs() {
            const response = await fetch(`http://localhost:5050/blogs/`);
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
        return;
    }, [blogs.length]);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);


    function CheckBlogs(blogsArray) {
        if (blogsArray.blogs.length > 0) {
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