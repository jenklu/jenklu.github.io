import React from "react"
import Section from '../components/Section'
import Navbar from '../components/Navbar'

class Homepage extends React.Component{
    constructor() {
        super();
        this.state = { count: 0 }
    }
    count(change) {
        this.setState(prevState => ({
            count: prevState.count + change,
        }));
    }
    render() {
        const i_like = ["me", "math", "programming", "music"]
        const me = ["i'm 21 years old, and i've been based out of the same house outside boston that whole time",
                     "i'm going to be a senior at ucla, studying computer science and a little math",
                     "besides the other sections on this page, i derive most of my happiness in life from traveling/hiking/talking with my",
                     "friends: pi kappa phi, cec, belmont high school (cec ∩ pkp 👍👍)",
                     "girlfriend: annie thornton",
                     "family: bruce, juliet, maddie, tess, sam, carly, emily, alex, benjamin"];
        const math = ["i've always liked math, but it got a lot harder when i got to college",
                      "rolando de santiago was one of the best math teachers i've ever had - i actually enjoyed linear algebra and proofs",
                      "complex analysis was cool too but didn't feel as applicable",
                      "i've taken one ml class, but i'm excited to be taking optimization and an ml class in the math department at ucla next year",
                      "i really like https://jeremykun.com/"];
        const code = ["i started out as an ee major after working on mri machines at mgh in boston",
                      "i started programming my freshman year of college in cs31 at ucla (s/o smallberg)",
                      "since then i've worked on:",
                      "cec@ucla - i'm now the director of a ~8 person web development team - our mission is to create web and mobile content \
                      to promote events for the campus org",
                      "silicon labs - i spent a summer doing full stack dev of a test harness in Python for a hardware support team - i got \
                      to programmatically work with some hardware, which was cool experience",
                      "draftkings - i'm currently doing a summer internship mostly writing backend C#/MySQL code for the team that develops \
                      the main fantasy sports games for the website, gaining experience in both backend web dev and agile software dev",
                      "i like to use:",
                      "Python",
                      "C#",
                      "C",
                      "React",
                      "LISP"
                      ];
        const music = ["i used to play music a lot - i took classical piano lessons from 5-18",
                       "now i'm mostly a listener, but i've started picking up guitar - hopefully making this section of the website can encourage \
                       me to keep practicing",
                       "some of my favorite artists are:",
                       "kanye west",
                       "john mayer",
                       "brockhampton",
                       "louis the child",
                       "frank ocean",
                       "mura masa"];
        const home_style = {fontFamily:"Courier"};
        return (
            <div style={home_style}>
                <Navbar sections={i_like}/>
                <Section title={i_like[0]} list_items={me} />
                <Section title={i_like[1]} list_items={math} />
                <Section title={i_like[2]} list_items={code} />
                <h3> counter </h3>
                <p>count: {this.state.count}</p>
                <button onClick={() => this.count(1)}> plus </button>
                <button onClick={() => this.count(-1)}> minus </button>
                <Section title={i_like[3]} list_items={music} />
            </div>
        ) 
    }
}

export default Homepage;