import React from 'react';

function NavItem(props){
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.link}>{props.label}</a>
        </li>

        // <li className="nav-item active">
        //     <a className="nav-link" href={props.link}>{props.label}</a>
        // </li>
    )
}

class NavBar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">My Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <NavItem label="Projects" link="/projects" />
                        <NavItem label="Blog" link="/blog" />
                        <NavItem label="Contact" link="/contact" />
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default NavBar;