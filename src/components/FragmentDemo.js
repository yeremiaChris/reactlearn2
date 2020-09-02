import React from 'react'

function FragmentDemo() {
    return (
        // <div>
        //     <h1>FragmentDemo</h1>
        //     <p>This describes the fragment demo component</p>
        // </div>


        // pengganti div karena jsx hanya menerima satu element saja
        <React.Fragment >
            <h1>FragmentDemo</h1>
            <p>This describes the fragment demo component</p>
        </React.Fragment>
    )
}  

export default FragmentDemo
