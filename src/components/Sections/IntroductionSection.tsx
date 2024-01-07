const IntroductionSection = () => {

    const currentDate = new Date();
    const professionalCareerStart = new Date('2022-05-01');

    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // account for leap years

    const differenceInMilliseconds = currentDate.getTime() - professionalCareerStart.getTime();
    const yearsOfExperience = Math.round(differenceInMilliseconds / millisecondsInYear);


    return(
        <div className="container center-text">
            <h1>
                <span>
                    A <strong className="redText">Quick</strong> Introduction
                </span>
            </h1>
            <div>
                <img className='headshot' src="img/village-darren-modified.png" alt=""/>
            </div>
            <p className="paragraph">
                Welcome! I'm Darren Bentler, a professional software engineer with 2 years of experience building scalable and maintainable enterprise applications.
                <br/><br/>
                Feel free to look around the site. You can find more detailed information via the navigation bar above. If time is short, continue scrolling for more "elevator pitch" style information.
                <br/><br/>
                <i>For the best experience, I recommmend viewing the website on a desktop.</i>
            </p>
        </div>
    )
}

export default IntroductionSection;