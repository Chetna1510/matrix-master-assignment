import React, {useState, useEffect} from 'react'


export default function Main() {
    const [allQuotes, setAllQuotes] = useState([]);       // All fetched quotes
    const [currentQuote, setCurrentQuote] = useState(null); // Currently displayed quot
    
    
    useEffect(() => {
        fetch("https://dummyjson.com/quotes")
        .then((res) => res.json()) // parse JSON first
        .then((data) => {
            //console.log(data); // now you see the full object
            setAllQuotes(data.quotes); // store array of quotes in state
            // Pick a random quote as default
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            setCurrentQuote(data.quotes[randomIndex]);
    
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const nextQuote = () => {
        const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)]
        setCurrentQuote(randomQuote);
    } 

    //console.log(currentQuote)

    // Show loading until the first quote is ready
    if (!currentQuote) return <p>Loading...</p>;
    return (
        
        <div style={{ padding: "2rem", textAlign: "center" }} className='quote'>
            
            <ul style={{ listStyle: "none", padding: 0 }}>
                {    
                <li key={currentQuote.id} style={{ marginBottom: "1rem" }}>
                    <p id="quote">"{currentQuote.quote}"</p>
                    <p id="quote-author">— {currentQuote.author}</p>
                </li>
                } 
            </ul>
            <button onClick={nextQuote} id='next-quote'>Next Quote</button>
        </div>
    )
}
