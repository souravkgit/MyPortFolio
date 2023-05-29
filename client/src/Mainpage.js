import App from "./App"
import Allblogs from "./components/Allblogs/Allblogs";
import BlogPages from "./components/BlogPages/BlogPages";
import { Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { demohost } from "./loadEnvironment.js";
const host = demohost || "http://localhost:5050/";
console.log(host);
const BlogWrapper = () => {
    const { id } = useParams();
    return <BlogPages id={id} host={host} />
};

const Mainpage = () => {

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    exact
                    element={
                        <App />
                    }
                />
                <Route
                    path="/blogs"
                    exact
                    element={
                        <Allblogs host />
                    }
                />
                <Route
                    path="/blogs/:id"
                    exact
                    element={
                        <BlogWrapper />
                    }
                />
            </Routes>
        </div>
    );
}

export default Mainpage;