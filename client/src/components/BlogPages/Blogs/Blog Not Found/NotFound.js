import "./NotFound.scss";

const NotFound = () => {
    function goHome() {
        console.log("heheheheehe")
        window.location = "/";
    }
    return (
        <div className="not-found-container">
            <div className="wrapper">
                <div className="TextHolder">
                    <div className="Texts">
                        <div className="FourOhFour">404
                        </div>
                        <div className="Bad">MY BAD this page couldn't be found.</div>
                        <div className="Return-btns">
                            <div className="Return btn">
                                <a href="/">Return Home</a>
                            </div>
                            <div className="Return btn">
                                <a href="/blogs">Return Blogs</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Body">

                    <div className="LeftEye"></div>
                    <div className="RightEye"></div>
                    <div className="EyeShadows"></div>
                    <div className="Mouth"></div>
                    <div className="MouthShadows"></div>
                    <div className="Theet"></div>
                    <div className="BodyTexture"></div>
                </div>

                <div className="Horns">

                    <div className="HornsExtras"></div>
                </div>

                <div className="LeftHand"></div>
                <div className="RightHand"></div>


                {/* h4 Move ur mouse < br > left or Right:) */}

            </div>
        </div>

    )
}

export default NotFound;