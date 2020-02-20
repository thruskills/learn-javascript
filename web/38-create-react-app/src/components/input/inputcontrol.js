import React from 'react';

class Example extends React.Component {
    state = {text: ''}
    handleChange = (event) =>{
        // ignore numbers
        let txt = event.target.value;
        txt = txt.replace(/[0-9]/g, '')
        this.setState({
            text: txt
        })
    }
    render(){
        return(
            <input type="text" value={this.state.text} 
            onChange={this.handleChange} />
        )
    }
}

export default Example;