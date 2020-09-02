import React from 'react'

class Message extends React.Component {

    // create an object and initialize by class constructor

    constructor() {
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }

    changeMessage() {
        // fungsi dibawah adalah membuat state baru
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render(){
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message