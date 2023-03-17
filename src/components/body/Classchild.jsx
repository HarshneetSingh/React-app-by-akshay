import React, { Component } from 'react'

export default class Classchild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        console.log("search: " + props.name);

    }
    componentDidMount() {
        this.setState({
            user: "yo"
        })

        this.timer = setInterval(() => {
            console.log("class setinterval")
        }, 1000)
        console.log("child componentDidMount: " + this.props.name);
    }
    componentDidUpdate() {
        console.log("child componentDidUpdate: " + this.props.name)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
        console.log('bye class')
    }
    render() {
        console.log("searchchild render: " + this.props.name);

        return (
            <>
                <div>class child start</div>
                <h1>{this.state.user}</h1>
                <h1>{this?.state?.user?.name}</h1>
                <img src={this?.state?.user?.avatar_url} alt="" />
                <div> class child ends</div>
            </>

        )
    }
}
