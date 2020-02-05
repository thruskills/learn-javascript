import React from 'react';

function Hello(){
    return <span>Hello</span>;
}

// JSX rules
/*
    1. if the return statment has just one tag in the same line skip ()
    2. if the element definition is not in the same line as of return then () is mandatory
    3. There can be only one top level element
*/
function World(){
    return (
        <span>World</span>
    );
}

function HelloWorld(){
    return (
        <div>
            <Hello /> <World />
        </div>
    );
}

export default HelloWorld