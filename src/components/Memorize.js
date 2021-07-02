import React, { useState } from 'react'

const Memorize = () => {

    const [counter, setCounter] = useState(10)

    return (
        <div>
            <h1>Counter: {counter}</h1>
        </div>
    )
}

export default Memorize
