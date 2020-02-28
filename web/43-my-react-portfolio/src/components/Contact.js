import React from 'react';

class Contact extends React.Component{
    constructor(){
        // understand what super does
        super();
        this.state = {
            name: '',
            email: '',
            mobile: '',
            description: '',
            contactSaved: false,
            error: null
        }

        // understand this syntax
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        var obj = {}
        obj[event.target.name] = event.target.value;
        this.setState(obj)
    }

    handleSubmit(event){
        console.log('handle submit')
        console.log(this.state)
        event.preventDefault();
        // make the api call
        fetch("http://localhost:3005/dashboard/contacts", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(this.state), // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(
            (result) => {
            console.log(result)
            this.setState({
                contactSaved: true
            });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    contactSaved: true,
                    error
                });
            }
        )
    }
    
    render(){
        // check if some error
        // check if data saved
        if(this.state.error){
            return <div>Error: {this.state.error.message}</div>;
        }else if(this.state.contactSaved){
            return (
                <div className="alert alert-success" role="alert">
                    Thank you for contacting us. We will get back at the earliest.
                </div>
            )
        }else{
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Contact Me</h1>
                    </div>
                    <hr />
                    <br />

                    <div className="form-label-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="form-label-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email address" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="form-label-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="number" name="mobile" id="mobile" className="form-control" placeholder="Mobile" value={this.state.mobile} onChange={this.handleChange} />
                    </div>

                    <div className="form-label-group">
                        <label htmlFor="mobile">Description</label>
                        <textarea name="description" id="description" rows="5" className="form-control" placeholder="Description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>

                    <div className="form-label-group">
                        <br />
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                    </div>
                </form>
            )
        }
    }
}

export default Contact;
