import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello'
        }
    }
    
    // changeState() {
    //     this.setState({
    //         message: 'apa'
    //     })
    // }

    changeState = () => {
        this.setState({
            message: 'apa'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.changeState/*.bind(this)*/}>click</button>                
            </div>
        )
    }
}

export default EventBind
