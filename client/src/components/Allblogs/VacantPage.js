import React from "react";
import empty_image from "./empty.png";
const VacantPage = () => {
    return (<div className="blogs-container-empty">
        <div className="empty-blog-page">
            <div className="empty-image">
                <img src={empty_image} alt="" />
            </div>
            <div className="empty-text">
                Nothing Here
            </div>
        </div>
    </div>)
}

export default VacantPage;