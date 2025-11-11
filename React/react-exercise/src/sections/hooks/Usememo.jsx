import React, {useState, useMemo, useEffect} from 'react'

export default function Usememo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    //const doubleNumber = slowFunction(number);

    // this function is running slow so we will use useMemo
    // the reason is that this whole "Usememo" function will run every single time when component render
    // memo stands for memorization, idea of caching the value
    // we can cache that input value "number here"

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number] ) //number will change then this will execute
    // when the dependency change, the code will run

    //second use case: 

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }  
    }, [dark])

    useEffect (()=> {
        console.log('theme changed');
    }, [themeStyles]) //it continueously printing out theme change but the porblem is
    //when I change the number, it's also console 'theme changed' to be run
    //and the reason for this is that referencial equality
    //means everytime we run out function we get a new themestyles object
    //and the new themstyle object is not the same as the old themestyle object even though they have exact same values in the obj, the reference different places in the memory
    // so in order to make sure tthat we only ever run useEffect when our themesytle obj actually gets reupdated, we can use useMemo()
    // wrap themestyle obj in useMemo()
  return (
    <div className='hooks'>
        <h3>4. useMemo</h3>
        <input type="number" value={number} onChange = { e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num) {
    console.log('calling slow function before useMemo')
    for(let i=0; i <= 100000000; i++){
        return num * 2

    }
    
}

