import React from "react";
import "./BlogPages.scss";
import WebHosting from "./Blogs/Hosting NodeJs Application/WebHosting";
import { useEffect, useState } from "react";
import Onload from "../Onload/Onload";
import NotFound from "./Blogs/Blog Not Found/NotFound";

const BlogPages = (props) => {
    console.log(props.id);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);
    var redire = props.id;
    if (loading) {
        return (<Onload />)
    }
    else {
        if (redire === "hosting-your-node-application") {
            return (<WebHosting />)
        }
        return (<NotFound />);
    }
}

export default BlogPages;