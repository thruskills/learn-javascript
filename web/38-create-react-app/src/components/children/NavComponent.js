import React from 'react';

function NavItem({url,children}){
    return (
        <a href={url}>{children}</a>
    )
}

function Nav({children}){
    let items = React.Children.toArray(children);
    for(let i = items.length -1; i >= 1; i-- ){
        items.splice(i,0,
            <span key={i} className='separator'> | </span>)
    }
    return (<div>{items}</div>)
}
function NavComponent(){
    return (
        <Nav>
            <NavItem url='/'>Home</NavItem> 
            <NavItem url='/about'>About</NavItem> 
            <NavItem url='/contact'>Contact</NavItem>
        </Nav>
    )
}

export default  NavComponent;