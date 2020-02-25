import React from 'react';

function Project(props){
    
    return (
        <div className="card" style={{width: "18rem"}}>
            <a href={props.id}>
                <img src={props.image} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.id} className="btn btn-primary">View Details</a>
            </div>
        </div>
    )
}

class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          projects: {}
        };
    }

    componentDidMount() {
        fetch("http://localhost:3005/dashboard/projects")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result)
              this.setState({
                isLoaded: true,
                projects: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    render(){
        // get the list from the API and render
        const { error, isLoaded, projects } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else{
            return (
                <div className="row">
                    {
                        projects.data.map(project => (
                            <div className="col-md-4" key={project._id} >
                                <Project id={project.id} image="/images/1.jpg" title={project.title} description={project.description}/>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}

export default Projects;