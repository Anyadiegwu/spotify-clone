import React, { useEffect} from 'react';
import cardImage from '../asset/cardImage.jpeg'
import './Card.css'
import { BsPlusSquare } from 'react-icons/bs'
import { useStateProvider } from '../../Utils/StateProvider';
import axios from 'axios';
import { reducerCases } from "../../Utils/Constant";


export default function Card(){
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
            { playing && 
            <div className='card'>
                <div>
                <img src={ !playing  ?
                    cardImage :
                    playing.image 
                    
                    } alt=''/>
            </div>
            <div className='cardWrite'>
                <div>
                    <p>
                    { !playing  ?
                    <p>Toriestsu</p> :
                    playing.name 
                    
                    } </p>
                    <p>
                    { !playing  ?
                    <p>Kana Nishino</p>:
                    playing.artists.join(", ") 
                    
                    }
                    </p>
                </div>
                <i><BsPlusSquare /></i>
            </div>
            </div>
            }
    </>
)
}