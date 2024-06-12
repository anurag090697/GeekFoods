import quoteList from "./quotelist.js"
import QuoteCard from "./QuoteCard.jsx"

function Quotes() {
    return(
        <div className="showQuote">
            {quoteList.map((Quotes, index) => {
             return ( <QuoteCard key={index} text={Quotes.quote} author={Quotes.author}>
                </QuoteCard>)
            })}
        </div>
        
    )
}

export default Quotes;