import React from "react"
import "../styles/homepage.scss"
import LinkContainer from "../components/LinkContainer.js"

class Index extends React.Component{
    render() {
        return (
            <div className="mainContainer">
                <div id="welcomeHeader">
                    <p className="headerText">
                    Welcome to Lucas Jenkins’ homepage!
                    </p>
                </div>
                <div className="separationHeader">
                    <p className="headerText">
                    About Me
                    </p>
                </div>
                <div>
                    <p className="aboutText">
                    I’m Lucas, a 22-year old who’s about to move to San Francisco. 
                    I was born and raised in Boston, went to LA for college, and loved 
                    California so much I decided to stay out there for a full-time job 
                    as a software engineer at Google. Besides writing code and spending 
                    time with friends & family, I enjoy playing basketball, playing the 
                    guitar, and looking for the best taco places in any city I visit. 
                    Check out the rest of my website to learn more about me and what 
                    I’ve worked on.
                    </p>
                </div>
                <div className="separationHeader">
                    <p className="headerText">
                    Outside Links
                    </p>
                </div>
                <LinkContainer />
            </div>
        ) 
    }
}

export default Index;