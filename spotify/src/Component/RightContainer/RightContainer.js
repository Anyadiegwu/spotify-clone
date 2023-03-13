import React, { useEffect} from "react";
import './RightContainer.css'
import ShortcutBtn from "../ShortcutBtn/ShortcutBtn";
import Artist from "./Artist/Artist";
import { BsDot } from 'react-icons/bs'
import Card from "../Card/Card";
import cardImage from '../asset/cardImage.jpeg'
import { reducerCases } from "../../Utils/Constant";
import axios from 'axios';
import { useStateProvider } from '../../Utils/StateProvider';
import { BsPlusSquare } from 'react-icons/bs'




export default function RightContainer(){
    const [{ token, playing }, dispatch] = useStateProvider();


    useEffect(() =>{
        const getCurrentImg = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/player/currently-playing", 
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            if(response.data !== ""){
                const { item } = response.data;
                const playing = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist) => artist.name),
                    image: item.album.images[2].url,
                };
            dispatch({ type: reducerCases.SET_PLAYING, playing });
            }
            
        };
        getCurrentImg();
    }, [token, dispatch, playing])
return(
    <>
        <div className="rightBar">
            <ShortcutBtn />
            <div className="artist">
               <h2>Fav Artist</h2>
                <ul>
                    {Artist.map((list) =>(
                        <li key={list?.id}>
                            <div className="fav">
                            <div className="a">
                                <div>
                                <img src={list?.image} alt=""/>
                                </div>
                                <div id="artist">
                                    <div>
                                        <span>{list.name}</span>
                                        <p>{list.song} songs in the library</p>
                                    </div>
                                    <div className="dot"><i><BsDot /></i><i><BsDot /></i></div>
                                </div>
                            </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {
                !playing? 
                <div className="card">
                    <div><img src={cardImage} alt='' /></div>
                    <div className="cardWrite">
                        <div>
                            <p>Toriestsu</p>
                            <p>Kana Nishino</p>       
                        </div>
                        <i><BsPlusSquare /></i>
                    </div>
                </div>
                   :
                <Card />
            }
        </div>
    </>
)
}
