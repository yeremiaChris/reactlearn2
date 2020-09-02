import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'yeremia'
        }

        console.log('licycleB constructor');
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifecycle B componentdidmount');
    }

    shouldComponentUpdate() {
        console.log('lifecycle B shouldcomponentupdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState)  {
        console.log('Lifecycle B getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('lifecycle B componentDidUpdate');
    }





    render() {
        console.log('lifecycle B render');
        return (
            <div>
                <h1>LifeCycleB</h1>
            </div>
        )
    }
}

export default LifeCycleB
