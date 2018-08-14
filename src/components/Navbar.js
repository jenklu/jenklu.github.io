import React from "react"

function Navbar(props){
    const item_style = {
        display: 'inline',
        marginLeft: '5px',
        marginRight: '5px',
        border: '2px dotted black',
        color: '#4ec62d',

    }
    const sections = props.sections.map((section)=>
        <li style={item_style}>
            <a href={"#" + section}>{section}</a>
        </li>
    );
    const navbar_style = {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        fontSize: '24px',
        textShadow: 'none',
        width: '100%',
        position: 'fixed'

    };
    return(
        <div style={{width: '100%', textAlign: 'center'}}>
            <ul style={navbar_style}> {sections} </ul>
        </div>
    );
}

export default Navbar;