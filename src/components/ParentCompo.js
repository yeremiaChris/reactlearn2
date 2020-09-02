import React, { Component } from 'react'

class ParentCompo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Yeremia'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Yeremia'
            })
        }, 2000);
    }
    

    render() {
        return (
            <div>
                ParentComponent
            
            <RegComp name={this.state.name}>

            </RegComp>

            <PureComp name={this.state.name}>

            </PureComp>    


            </div>
        )
    }
}

export default ParentCompo
