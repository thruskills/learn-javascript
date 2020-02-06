import React from 'react';

/* component witth props */
function Avatar(props){
    return <img src={props.image} />
}

// lets use destructuring to extract exact props
function Avatar1({image, width}){
    return <img src={image} width={width} />
}

function Name(props){
    return <h1>{props.name}</h1>
}

function Card(props){
    return (
        <div>
            {/* use the component and pass it props */}
            <Avatar image={props.image} width="50" height="50" />
            <Avatar1 image={props.image} width="50" height="50" />
            <Name name={props.name} />
            <p>{props.location}</p>
        </div>
    )
}

export default Card;