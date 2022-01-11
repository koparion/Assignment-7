import react, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import GiphyCard from './GifCard';

function GiphySearch (props) {
    const [gif, setGif] =  useState({});

    const API = "rccQGZ4FcBfr08fUwUOQsbBod383I8Aa"
    RegularSearch = useEffect(() => 
        {
            axios.get("http://api.giphy.com/v1/gifs/search?q="+searchField+"&api_key="+API).then((response) => 
            {
                setGif(response.data)
            }); 
        },[]);
    
    //user input
    const searchField  = (event) => {
        event.preventDefault();
        const body = {gif};
        event.target.value;
    }

    return 
    (
        <div>
            <form onSubmit={searchField}>
                <input
                type="text"
                value={gif}
                onChange={(event) => setGif(event.target.value)}
                ></input>
                <button placeholder='Search Gif'>  
                </button>
            </form>
        </div>
    )

}// end of function

export default GiphySearch;