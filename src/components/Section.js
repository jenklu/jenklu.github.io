import React from "react"

function Section(props){
    const list_items = props.list_items.map(text =>
        <li>{text}</li>
    );
    return (
        <div id={props.title}>
            <h1>{props.title}</h1>
            <ul>{list_items}</ul>
        </div>
    )
}

export default Section;