import React, { useState } from "react";
import './Search.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'
import axios from "axios";
import { useStateProvider } from "../../Utils/StateProvider";
import { reducerCases } from "../../Utils/Constant";


function Search (){
    const [{ token,  }, dispatch] = useStateProvider();
    const [ searchKey, setSearchKey ] = useState("")

    const searchArtists = async (e) =>{
        setSearchKey(e)
        console.log(searchKey)
        const [ data ] = await axios.get('https://api.spotify.com/v1/search?include_external=audio' , 
        {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
            params:  {
                q: "",
                type: 'artist'
            }
        })
        console.log(data)
        // dispatch({type: reducerCases})
    }
   
    // const search = (e) =>{
    //    <SearchPage />
    //     console.log("search")

    // }
return(
    <>
        <div className="header">
            <div className="arrow">
                <i><BsArrowLeft /></i>
                <i><BsArrowRight /></i>
            </div>
            <div className="search"  >
                <i><RiSearchLine /></i>
                <input type='search' placeholder="Search for artist, songs and..."
                onChange={(e) => searchArtists(e.target.value)}
                />
            </div>
        </div>
    </>
)
}

export default Search