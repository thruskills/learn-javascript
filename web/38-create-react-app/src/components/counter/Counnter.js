import React, { Children } from 'react';

function Child({onAction}){
    return (
        <button onClick={onAction}>
            Click Me!
        </button>
    )
}

class  Parent extends React.Component{
    state = {
        counter: 0
    }
    
    handleAction = (action) => {
        console.log('Clicked...');
        this.setState({
            counter: this.state.counter + 1
        }, function(){
            console.log('Counter:' , this.state.counter);
        });
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction} />
                <p>Clicked {this.state.counter} times.</p>
            </div>
        )
    }

}

export default Parent;