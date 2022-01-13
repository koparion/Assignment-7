import React, { useState } from "react";
import axios from "axios";
import GiphyCard from "./GifCard";
// import ReactDOM  from 'react';

function GiphyRegSearch(props) {
  const { random, setRandom, search, setSearch, list, setList } = props;
  const [input, setInput] = useState('');
  const trendURL =
    "http://api.giphy.com/v1/gifs/trending?api_key=rccQGZ4FcBfr08fUwUOQsbBod383I8Aa";
  const randURL =
    "http://api.giphy.com/v1/gifs/random?api_key=rccQGZ4FcBfr08fUwUOQsbBod383I8Aa";

  const API = "rccQGZ4FcBfr08fUwUOQsbBod383I8Aa";

  //handling Trend Giphy function
  const handleTrend = async (event) => {
    event.preventDefault();
    await axios.get(trendURL).then((response) => {
      console.log(response.data.data);
      setList(response.data.data);
    }, []);
  };

  const handleRandom = async (event) => {
    event.preventDefault();
    await axios.get(randURL).then((response) => {
      setRandom([response.data.data]);
    }, {});
  };
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  //   setSearch(event.target.value);
  // };

const handleSearch = async event => {
 event.preventDefault();
    await axios.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key="+API).then((response)=>{
        setSearch(response.data.data);
    },[]);
  };

  const handleChange = (event) => {
    event.preventDefault();
    if(event.includes(' '))
        event.replace(' ','+');
    console.log(event.target.value);
    setInput(event.target.value);
  };

  return (
    // <div onLoadStart={handleChange}>
    <>
      <div>
        <form> 
        <button onClick={handleTrend}>Trending</button>
        <button onClick={handleRandom}>Random</button>
        <button onClick={handleSearch}type="submit">Search</button>
        <input type="text" onChange={handleChange}></input>
        </form>
       
        <GiphyCard
          random={random}
          setRandom={setRandom}
          search={search}
          setSearch={setSearch}
          list={list}
          setList={setList}
        />
      </div>
    </>
  );
}

export default GiphyRegSearch;
