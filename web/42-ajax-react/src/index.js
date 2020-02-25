import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyAjaxComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        operations: []
      };
    }
  
    componentDidMount() {
      fetch("http://calctest.iesim.biz/operations")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              operations: result
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
      const { error, isLoaded, operations } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {operations.map(item => (
              <li key={item.operation}>
                {item.operation} {item.arguments}
              </li>
            ))}
          </ul>
        );
      }
    }
  }


ReactDOM.render(<MyAjaxComponent />, document.getElementById('root'));