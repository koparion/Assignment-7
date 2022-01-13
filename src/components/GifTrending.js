import axios from "axios";
import React, { useState, useEffect } from "react";

function GifTrending(props) {
  const { results, setResults, search, setSearch } = props;
  const [list, setList] = useState([]);
  const trendURL =
    "http://api.giphy.com/v1/gifs/trending?api_key=rccQGZ4FcBfr08fUwUOQsbBod383I8Aa";
  const randURL =
    "http://api.giphy.com/v1/gifs/random?api_key=rccQGZ4FcBfr08fUwUOQsbBod383I8Aa";

  const handleTrend = async (event) => {
    event.preventDefault();
    await axios.get(trendURL).then((response) => {
      console.log(response.data.data);
      setList(response.data.data);
    }, []);
  };

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    // <div onLoadStart={handleChange}>
    <>
      <div>
        <form onSubmit={handleTrend}>
          <button type="submit">Trending</button>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
        {list.map((element) => {
          return (
            <div className="container">
                <ul>
              <li key={element}className="card-img"><a href={element.url}>
                <img
                  src={element.images.fixed_height_small.url}
                  alt="gif"
                ></img></a>
              </li></ul>
            </div>
            /* {list.map((element) => {
            return (
              <div className="container">
                <div className="d-flex justify-content-center">
                  <ul className="list-group list-group border m-1">
                    <li className="list-group">{element.gif.images.original}</li>
                  </ul>
                </div>
              </div> */
          );
        })}
      </div>
    </>
  );
}

export default GifTrending;
