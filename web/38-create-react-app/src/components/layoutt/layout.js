import React from 'react';

class Layout extends React.Component {
    state = {
        showSideBar: false
    }
    toggleSideBar = () => {
        this.setState({
            showSideBar : !this.state.showSideBar
        })
    }
    render(){
        const {showSideBar} = this.state;
        return(
            <div className="layout">
                {
                    showSideBar && 
                    <Sidebar onHide={this.toggleSidebar}> some sidebar content </Sidebar>
                }
                <Content isSidebarVisible={showSideBar} showSideBar={this.showSideBar}> 
                    some content here
                </Content>
            </div>
        )
    }
}

const Content = ({ children, isSidebarVisible, showSideBar }) =>(
    <div className="content">
        {children} {!isSidebarVisible && (
        <button onClick={showSideBar}> Show </button>
        )} 
    </div>
);

const Sidebar =  ({ onHide, children }) => (
    <div className="sidebar">
         {children}
         <button onClick={onHide}>
            Hide 
        </button>
    </div>
);

export default Layout;