import "../styles/homepage.scss"
import React from "react"
import linkedinIcon from "../assets/linkedin_icon.png"
import resumeIcon from "../assets/resume_icon.png"
import githubIcon from "../assets/github_icon.png"
import instaIcon from "../assets/insta_icon.png"
import spotifyIcon from "../assets/spotify_icon.png"


const LinkContainer = (props) => {
    return(
    <div className="linkContainer">
        <div className="linkItem">
            <p className="linkDescription">
                For my most professional side
            </p>
            <a href="https://www.linkedin.com/in/lucas-jenkins/" target="_blank"> 
                <img src={linkedinIcon} alt="LinkedIn icon link"/> 
            </a>
        </div>
        <div className="linkItem">
            <p className="linkDescription">
                For my LinkedIn info in PDF form
            </p>
            <a href="lucas-jenkins-resume.pdf" download> 
                <img src={resumeIcon} alt="Resume icon link"/> 
            </a>
        </div>
        <div className="linkItem">
            <p className="linkDescription">
                To look at some code I've written
            </p>
            <a href="https://github.com/jenklu" target="_blank"> 
                <img src={githubIcon} alt="Github icon link"/> 
            </a>
        </div>
        <div className="linkItem">
            <p className="linkDescription">
                For some pics of my friends and me
            </p>
            <a href="https://www.instagram.com/leroy.j12/" target="_blank"> 
                <img src={instaIcon} alt="Instagram icon link"/> 
            </a>
        </div>
        <div className="linkItem">
            <p className="linkDescription">
                To see what music I’m into
            </p>
            <a href="https://open.spotify.com/user/1231801536?si=s6Oi3haTQH6U88Er0Bqt8A" target="_blank">
                <img src={spotifyIcon} alt="Spotify icon link"/>
            </a>
        </div>
    </div>
    );
}

export default LinkContainer;