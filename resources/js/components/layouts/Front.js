import React, { Component } from "react";

class Front extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <p> This is Header</p>
                {this.props.children}
                <p> This is Footer</p>
            </React.Fragment>
        );
    }
}

export default Front;