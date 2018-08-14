import React from "react"

function listify(input){
    if (typeof input === "string")
        return (<li>{input}</li>);
    else if (Array.isArray(input)){
        return input.map(function(element){
            return (<ul>{listify(element)}</ul>);
        });
    }
    else{
        var text = Object.keys(input)[0];
        const linkStyle = {color:"white", textShadow: "-1.5px 0 black, 0 1.5px black, 1.5px 0 black, 0 -1.5px black"}
        return (<li><a href={input[text]} style={linkStyle} target="_blank">{text}</a></li>);
    }
}

function Section(props){
    const listified = listify(props.list_items);
    return (
        <div id={props.title}>
            <h1>{props.title}</h1>
            {listify(props.list_items)}
        </div>
    )
}

export default Section;