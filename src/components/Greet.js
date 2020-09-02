// import React from 'react'

// const Greet = props => {
//     console.log(props)
//     return (
//         <div>
//             <h1>hello {props.name} and {props.heroName}</h1>
//         </div>
//     )
// }

// export default Greet

// destructuring function

// import React from 'react'

// const Greet = props => {
//     const {name,heroName} = props
//     return (
//         <div>
//             <h1>hello {name} and {heroName}</h1>
//         </div>
//     )
// }

// export default Greet




import React, { Component } from 'react'

export class Greet extends Component {
    render() {

        const {name,heroName} = this.props

        return (
            <div>
                {/* <h1>hello {this.props.name} and {this.props.heroName}</h1> */}
                <h1>hello {name} and {heroName}</h1>
            </div>
        )
    }
}

export default Greet
