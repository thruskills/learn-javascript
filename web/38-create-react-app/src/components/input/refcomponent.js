import React from 'react';

class RefComponent extends React.Component{
    showValue= () => {
        console.log(this.data)
        alert(`input contains : ${this.data.value}`)
    }
    render(){
        return(
            <div>
                <input type="text" defaultValue="React" ref={input => this.data = input} />
                <button onClick={this.showValue}>
                    Display Value
                </button>
            </div>
        )
    }
}

export default RefComponent;