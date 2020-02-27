import React from 'react';

class ProjectDetail extends React.Component {
    state = {
      error: null,
      isLoaded: false,
      project: null
    }
    componentDidMount () {
        const { id } = this.props.match.params
        fetch(`http://localhost:3005/dashboard/projects/${id}`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    isLoaded: true,
                    project: result
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
    render() {
        const { error, project, isLoaded } = this.state;
        console.log(project)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else{
            return(
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item bc-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item bc-item"><a href="/projects">Projects</a></li>
                            <li className="breadcrumb-item" aria-current="page">{project.title}</li>
                        </ol>
                    </nav>
                    <h1>{project.title}</h1>
                    <div>
                        <img src={project.image} width="50%"/>
                    </div>
                    <p>{project.description}</p>
                </div>
            )
        }
    }
}

export default ProjectDetail;