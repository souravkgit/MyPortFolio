import React from "react";
import "./BlogPages.scss";
import WebHosting from "./Blogs/Hosting NodeJs Application/WebHosting";
import { useEffect, useState } from "react";
import Onload from "../Onload/Onload";
import NotFound from "./Blogs/Blog Not Found/NotFound";
import Footer from "../Footer/Footer";

const BlogPages = (props) => {
    var data;
    const [loading, setLoading] = useState(true);
    const [Senddata, setSenddata] = useState();
    // var redire = props.id;
    window.onload = () => {
        setLoading(true);
    }
    useEffect(() => {
        setLoading(true);
        async function getData() {
            const response = await fetch(props.host + "blogs/" + props.id);
            if (!response.ok) {
                const message = "Error Fetching Blog";
                setSenddata(message);
                return message;
            }
            if (response) {
                const resp = await response.json();
                setSenddata(resp);
            }
        }
        getData();
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (loading) {
        return (<Onload />)
    }
    else {
        data = Senddata;
        if (props.id === "hosting-your-node-application" && data && data !== "Error Fetching Blog") {
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