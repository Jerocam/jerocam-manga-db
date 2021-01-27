import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jikan1.p.rapidapi.com/top/anime/1/upcoming", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "a9500b4c25msh1c6e462bfe9c887p1a2de3jsn2f4d0bc9e858",
          "x-rapidapi-host": "jikan1.p.rapidapi.com"
        }
      })
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true);
          setData(result.top);
          console.log(result.top)
        },
    
        (error) => {
          setLoading(true);
          setError(error);
        }
      )
  }, [])

  if(error){
    return <div>Error: {error.message}</div>; }
  else if (!loading){
    return <div>Loading...</div>;}
  else {
    return (
    <div className="App">
      <header className="App-header">
        <div className="alert">
          <p>Click <a href=""><strong>here</strong></a> to get the source code from Github. </p>
        </div>
      <h1>Top Manga Books</h1>
      <div className="grid-container">
        {data.map((item, key) => (
          <div className="grid-item" key={key}> 
            <img src={item.image_url} alt="img"/>
            <div>
              <h6>{item.title}</h6>
            </div>
            <h4>Rank {item.rank}</h4>
          </div>
        ))}
      </div>
      </header>
    </div> );
  }
}

export default App;
