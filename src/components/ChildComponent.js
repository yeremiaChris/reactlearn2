import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* paramater greetHandler itu adalah childNamenya greetHandler */}
            <button onClick={() =>  props.greetHandler('anak')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
