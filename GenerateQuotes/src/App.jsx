import { useEffect, useState } from "react";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quotes) => setQuotes(quotes))
      .catch((err) => console.log(err));
  }, []);

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <>
      <button onClick={getRandomQuote}>New Quote</button>
      <p>{quote.text}</p>
      <p>{quote.author}</p>
    </>
  );
}
