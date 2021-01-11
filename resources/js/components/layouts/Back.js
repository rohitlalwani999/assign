import React, { Component } from "react";

class Back extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <p> This is Header Back</p>
                {this.props.children}
                <p> This is Footer Back</p>
            </React.Fragment>
        );
    }
}

export default Back;