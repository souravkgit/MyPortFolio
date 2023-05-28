import React from "react";
import "./BlogPages.scss";
import WebHosting from "./Blogs/Hosting NodeJs Application/WebHosting";
import { useEffect, useState } from "react";
import Onload from "../Onload/Onload";
import NotFound from "./Blogs/Blog Not Found/NotFound";
import Footer from "../Footer/Footer";

const BlogPages = (props) => {
    var data;
    const [loading, setLoading] = useState(false);
    const [Senddata, setSenddata] = useState({});
    var redire = props.id;
    useEffect(() => {
        setLoading(true);
        async function getData() {
            const response = await fetch("http://localhost:5050/blogs/" + redire);
            if (!response.ok) {
                const message = "Error Fetching Blog";
                // return message;
            }
            if (response) {
                const resp = await response.json();
                setSenddata(resp);
            }
        }
        getData();
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (<Onload />)
    }
    else {
        console.log(Senddata);
        data = Senddata;
        if (redire === "hosting-your-node-application" && data !== "Error Fetching Blog") {
            return (
                <div id="current-blog-page">
                    <div className="blogs-navbar">
                        <div className="blog-nav">
                            <div className="blogs-logo">
                                Blog
                            </div>
                            <div className="blogs-menu">
                                <a href="/blogs">Blogs</a>
                            </div>
                        </div>
                    </div>
                    <WebHosting data={data} />
                    <Footer />
                </div>
            );
        }
        return (<NotFound />);
    }
}

export default BlogPages;