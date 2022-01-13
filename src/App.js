import "./App.css";
import GifRegSearchField from "./components/GifRegSearchField";
import GifTrending from "./components/GifTrending";
import React, { useState, ReactDOM } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [random, setRandom] = useState([]);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Title</h1>
      {/* <GifTrending 
      results={results} 
      setResults={setResults}
      search={search}
      setSearch={setSearch} /> */}
      <GifRegSearchField  
      random={random} 
      setRandom={setRandom}
      search={search}
      setSearch={setSearch}
      list={list}
      setList={setList}/>
    </div>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById("root"));
