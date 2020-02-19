// learn about shallow and deep merge

import React from 'react';

class ShallowComponent extends React.Component {

    state = {
        score: 7, 
        user: {
            name: "somebody",
            age: 26 
        },
        products: [ /*...*/ ] 
    }

    // event is SyntheticEvent
    handleUpdate = (event) =>{
        console.log(event.target);

        this.setState({
            //score: this.state.score + Math.random() * 10
            user: {name:'Balaji'}
        })
    }
    render(){
        return (
            <div>
                <p>Score: {this.state.score}</p>
                <p>User</p>
                <ul>
                    <li><b>Name:</b> {this.state.user.name}</li>
                    <li><b>Age:</b> {this.state.user.age}</li>
                </ul>
                <button onClick={this.handleUpdate}>
                    Update state
                </button>
            </div>
        )
    }
}

export default ShallowComponent;