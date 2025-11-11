import React, {useState} from 'react'

function countInitial(){
    console.log('run function');
    return 4
}

export default function Usestate() {
    //const [count, setCount] = useState(1)
    //const [count, setCount] = useState(countInitial())

    //here if we use default value or default function in usestate, it's run every single time when function runs
    // then it's not good way because the above statement will run eventime when componenet renders
    //so, we will use function version as below instead of default value/function
    const [count, setCount] = useState(()=> countInitial())
    // so, must use function version

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }


    //dealing with object
    const [state, setState] = useState({ countValue: 5, theme: "blue"})
    const countValue = state.count;
    const theme = state.theme;

    function incrementState() {
        setState(prevState => {
            
            //return {countValue: prevState + 1 } //this will just override the object, it will not show theme
            return { ...preState, countValue: prevState + 1 } // whaterver the value we change, that's the obly value should change.. not whole object
        })
    }

    function decrementState() {
        setState(prevState => prevState - 1)
    }
    return (
    <div className='hooks'>
        <h3>1. UseState</h3>
        <button onClick={increment}>+</button>
        <button>{count}</button>
        <button onClick={decrement}>-</button>
        <h4>This is printed using object: It's {theme} theme</h4>
        <button onClick={incrementState}>+</button>
        <button>{count}</button>
        <button onClick={decrementState}>-</button>   
    </div>
  )
}
