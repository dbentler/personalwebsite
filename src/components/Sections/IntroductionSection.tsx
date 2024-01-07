import React from "react";

const IntroductionSection = () => {

    return(
        <div className="container center-text">
            <h1>
                <span>
                    A <strong className="redText">Quick</strong> Introduction
                </span>
            </h1>
            <p className="paragraph">
                Welcome! My name is Darren Bentler, and I am a professional Software Engineer currently living on Long Island, New York.
                <br/><br/>
                Feel free to look around the site. You can find more detailed information via the navigation bar above. If time is short, continue scrolling for more "elevator pitch" style information.
                <br/><br/>
                <i>For the best experience, I recommmend viewing the website on a desktop.</i>
            </p>
        </div>
    )
}

export default IntroductionSection;