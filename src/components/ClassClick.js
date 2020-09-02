import React, { Component } from 'react'

class ClassClick extends Component {
    
    clickHandler() {
        console.log('click');
    }
    
    render() {
        
        // function clickHandler() {
        //     console.log('click');
        // }

        return (
            <div>
                <button onClick={this.clickHandler}>clic</button>                
            </div>
        )
    }
}

export default ClassClick
