import "./App.css";
import GifRegSearchField from "./components/GifRegSearchField";
import GifTrending from "./components/GifTrending";
import React, { useState, ReactDOM } from "react";

function App() {
  const [search, setSearch] = useState([]);
  const [random, setRandom] = useState([]);
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1 className="bg-info">Giphy Search</h1>
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
