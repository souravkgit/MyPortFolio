import App from "./App"
import Allblogs from "./components/Allblogs/Allblogs";
import { Routes, Route } from "react-router-dom";
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
                        <Allblogs />
                    }
                />
            </Routes>
        </div>
    );
}

export default Mainpage;