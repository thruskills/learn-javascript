import React from 'react';

function Avatar(props){
    return <img src={props.image} />
}
function Name(props){
    return <h1>{props.name}</h1>
}

function Card(props){
    return (
        <div>
            <Avatar image={props.image} />
            <Name name={props.name} />
            <p>{props.location}</p>
        </div>
    )
}

export default Card;