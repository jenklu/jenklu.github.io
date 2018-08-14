import React from "react"
import Section from '../components/Section'
import Navbar from '../components/Navbar'
import yosemiteBackground from '../img/yosemite.jpg'

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
    componentWillMount(){
        document.body.style.margin = 0;
        document.body.style.marginTop = "-21px";

    }

    render() {
        const i_like = ["me", "math", "programming", "music"]
        const me = ["i'm 21 years old, and i grew up in a nice little suburb outside boston",
                     "i'm going to be a senior at ucla, studying computer science and a little math",
                     "currently, i'm looking for job opportunities for fall 2019 that will be one or more of the following:",
                     ["intellectually stimulating - especially opportunities that will allow me to apply my math and ml knowledge i've developed",
                      "collaborative - learning from more experienced people WHILE creating software has, for me, proven \
                      to be by far the most efficient way for me to grow",
                      "software-related - i've spent the last few years of my life learning how to tell computers to do stuff, and now i want to do\
                      it for a living",
                      "well-located - i like living around young people in places with a lot of things to do"],
                     "besides the other sections on this page, i derive most of my happiness in life from traveling/hiking/talking with my",
                        ["friends: pi kappa phi, cec, belmont high school (cec ∩ pkp 👍👍)",
                        "girlfriend: annie thornton",
                        "family: bruce, juliet, maddie, tess, sam, carly, christian, emily, alex, benjamin, michael, james, lucy"],

                    ];
        const math = ["i've always liked math, but it got a lot harder (and a lot more interesting) when i got to upper divs",
                      "probability theory was the first upper division math class i took, which gave me experience in dealing with common probability distributions",
                      "rolando de santiago was one of the best math teachers i've ever had - i actually enjoyed linear algebra and proofs",
                      "real analysis gave me insight into the more theoretical side of mathematics, and provided me a foundational understanding of lower-div calc classes",
                      "i've taken an ml class in the cs department that was focused on a.) theory behind common ml models, and b.) applying the scikit learn implementations of these models",
                      "i'm excited to be taking class on optimization and ml class in the math department at ucla next year",
                      {"i really like jeremy kun's math ∩ programming website" : "https://jeremykun.com/"}];
        const code = ["i came into ucla as an ee major after working on mri machines at mgh in boston",
                      "i started programming my freshman year of college in cs31 at ucla (s/o smallberg)",
                      "since then i've worked on:",
                      {"cec@ucla - i'm now the director of an 8 person web development team - our mission is to create web and mobile content \
                      to promote events for the campus org" : "http://uclacec.com/#/"},
                      "silicon labs - i spent a summer doing full stack dev of a test harness in Python for a hardware support team - i got \
                      to write software that interfaced with and controlled real-world hardware",
                      "draftkings - i'm currently doing a summer internship mostly writing backend C#/MySQL code for the team that develops \
                      the main fantasy sports games for the website, gaining experience in both backend web dev and the agile software process",
                      "i like to use:",
                        [{"Python" : "https://www.python.org/"},
                        {"C#" : "https://docs.microsoft.com/en-us/dotnet/csharp/getting-started/introduction-to-the-csharp-language-and-the-net-framework"},
                        {"C" : "https://en.wikipedia.org/wiki/C_(programming_language)"},
                        {"React" : "https://reactjs.org/"},
                        {"LISP" : "https://common-lisp.net/"}]
                      ];
        const music = ["i used to play music a lot - i took classical piano lessons from 5-18",
                       "now i'm mostly a listener, but i've started picking up guitar - hopefully making this section of the website can encourage \
                       me to keep practicing",
                       "some of my favorite artists are:",
                        ["kanye west",
                        "john mayer",
                        "brockhampton",
                        "louis the child",
                        "frank ocean",
                        "mura masa"]
                       ];
        const home_style = { fontFamily:"Courier", color:"white", textShadow: "-1.5px 0 black, 0 1.5px black, 1.5px 0 black, 0 -1.5px black"};
        const bgStyle = { position:"fixed", zIndex:"-10", width:"100vw", height:"100vh"}
        return (
            <div style={home_style}>
                <img src={yosemiteBackground} style={bgStyle}/>
                <Navbar sections={i_like} />
                <Section title={i_like[0]} list_items={me} />
                <Section title={i_like[1]} list_items={math} />
                <Section title={i_like[2]} list_items={code} />
                <h3> counter </h3>
                <p>count: {this.state.count}</p>
                <button onClick={() => this.count(1)}> plus </button>
                <button onClick={() => this.count(-1)}> minus </button>
                <Section title={i_like[3]} list_items={music} />
            </div>
        );
    }
}

export default Homepage;