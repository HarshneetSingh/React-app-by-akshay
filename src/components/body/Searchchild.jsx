import React, { Component } from 'react'

export default class Searchchild extends Component {
    constructor(props) {
        super(props);
        console.log("search: "+props.name);
    }
    componentDidMount() {
        console.log("search componentDidMount: " +this.props.name);
    }
    render() {
        console.log("searchchild render: " +this.props.name);

        return (
            <>
            <div> ""</div>
               <div>hello {this.props.name} start</div> 
                <div>Searchchild+{this.props.name}</div>
                <div>  hello {this.props.name} end</div>
                <div> ""</div>
            </>

        )
    }
}

