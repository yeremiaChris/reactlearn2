import React from 'react'

function FunctionClick() {
    function clickHandler () {
        console.log('button clicked')
    }
    return (
        <div>
            {/* jangan buat clickhandler() jangan dipanggil functionnya
            karna dia akan di ekesekusi ketika di load */}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick