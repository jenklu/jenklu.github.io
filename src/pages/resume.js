import React from "react"
import resumePdf from '../assets/lucas_jenkins_resume.pdf'
class Resume extends React.Component{
    render() {
        return (
            <a href={resumePdf} download>
                click here to download my resume
            </a>
        ) 
    }
}

export default Resume;