import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'yeremia'
        }

        console.log('licyclea constructor');
    }
    

    static getDerivedStateFromProps(props,state) {
        console.log('lifecyclea getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifecycle a componentdidmount');
    }

    shouldComponentUpdate() {
        console.log('lifecycleA shouldcomponentupdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle A getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('lifecycle A componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'keren'
        }) 
    }

    render() {
        console.log('lifecycle a render');
        return (
            <div>
                <h1>LifecycleA</h1>
                <button onClick={this.changeState}>change state</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
