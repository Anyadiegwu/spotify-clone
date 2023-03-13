import React from "react";
import './Search.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'



function Search (){

return(
    <>
        <div className="header">
            <div className="arrow">
                <i><BsArrowLeft /></i>
                <i><BsArrowRight /></i>
            </div>
            <div className="search"  >
                <i><RiSearchLine /></i>
                <input type='search' placeholder="Search for artist, songs and..."/>
            </div>
        </div>
    </>
)
}

export default Search