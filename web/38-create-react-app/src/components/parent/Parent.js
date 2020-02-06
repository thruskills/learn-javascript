import React from 'react';


function handleAction(event){
    // event is an object
    // event in react - Synthetic event
    console.log('Child did', event)
}

function Parent(){

    // we will include a child componet 
    return <Child onAction={handleAction} />
}

function Child(props){
    // child should be able to send some data back to parent
    return (
        <button onClick={props.onAction}>Submit</button>
    );
}

export default Parent;


/*

Parent ----------------> Child
            props

Child ----------------> Parent
            x(props)

*/