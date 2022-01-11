import react, {setState, useEffect} from 'react'
import axios from 'axios'

function GiphySearch (props) {
    const [gif, setGif] =  setState({});


    const API = "rccQGZ4FcBfr08fUwUOQsbBod383I8Aa"
    let RegularSearch = useEffect(() => {
        axios.get("http://api.giphy.com/v1/gifs/search?q="+searchField+"&api_key="+API).then(response)
        
    }
    //api key rccQGZ4FcBfr08fUwUOQsbBod383I8Aa
}

export default GiphySearch;