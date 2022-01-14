import React, { useState } from "react";
import axios from "axios";
import GiphyCard from "./GifCard";
// import ReactDOM  from 'react';

function GiphyRegSearch(props) {
  const { random, setRandom, search, setSearch, list, setList } = props;
  const [input, setInput] = useState({});
  const [itsRandom, setItsRandom] = useState(false);
  const [itsSearching, setItsSearching] = useState(false);
  const [itsTrend, setsItsTrend] = useState(false);
  const trendURL =
    "http://api.giphy.com/v1/gifs/trending?api_key=rccQGZ4FcBfr08fUwUOQsbBod383I8Aa";
  const randURL =
    "http://api.giphy.com/v1/gifs/random?api_key=rccQGZ4FcBfr08fUwUOQsbBod383I8Aa";

  const API = "rccQGZ4FcBfr08fUwUOQsbBod383I8Aa";

  //handling Trend Giphy function
  const handleTrend = async (event) => {
    event.preventDefault();
    setsItsTrend(true);
    setItsRandom(false);
    setItsSearching(false);
    await axios.get(trendURL).then((response) => {
      console.log(response.data.data);
      setList(response.data.data);
    }, []);
  };
  // handling random giphy function
  const handleRandom = async (event) => {
    event.preventDefault();
    setItsRandom(true);
    setsItsTrend(false);
    setItsSearching(false);
    await axios.get(randURL).then((response) => {
      setRandom([response.data.data]);
    }, {});
  };
  // handle search giphy function
  const handleSearch = async (event) => {
    event.preventDefault();
    setItsRandom(false);
    setsItsTrend(false);
    setItsSearching(true);
    await axios
      .get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + API)
      .then((response) => {
        setSearch(response.data.data);
      }, []);
  };
  // when button is pressed for search, will handle change
  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  return (
    // <div onLoadStart={handleChange}>
    <>
      <div>
        <form onSubmit={handleSearch}>
          <button value="submit" type="submit">
            Search
          </button>
          <input
            type="text"
            onChange={handleChange}
            placeholder="search giphy"
          ></input>
          <button onClick={handleTrend}>Trending</button>
          <button onClick={handleRandom}>Random</button>
        </form>
        <GiphyCard
          random={random}
          search={search}
          list={list}
          randomsearch={itsRandom}
          searching={itsSearching}
          trending={itsTrend}
        />
      </div>
    </>
  );
}

export default GiphyRegSearch;
