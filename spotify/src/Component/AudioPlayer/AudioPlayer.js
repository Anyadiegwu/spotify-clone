import React from "react";
import './AudioPlayer.css'
import { CiHeart } from 'react-icons/ci'
import { BsArrowsAngleExpand, BsMusicNoteBeamed } from 'react-icons/bs'
import { TbRepeat } from 'react-icons/tb'
import { GrChapterNext, GrChapterPrevious } from 'react-icons/gr'
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from 'react-icons/bs'
import { IoShuffleOutline } from 'react-icons/io5'
import { RxSpeakerModerate, RxSpeakerLoud } from 'react-icons/rx'
import { useStateProvider } from "../../Utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../.././Utils/Constant";
// import Trial from "./trial/trial";





export default function AudioPlayer({audioRef}){
    const [{ token, playerState }, dispatch ] = useStateProvider();
    


    const changeTrack = async (type) => {
            await axios.post(
                    `https://api.spotify.com/v1/me/player/${type}`, {}, {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                });
                
            const response1 = await axios.get(
                    "https://api.spotify.com/v1/me/player/currently-playing", 
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                });

            if(response1.data !== ""){
                const playing = {
                    id: response1.data.item.id,
                    name: response1.data.item.name,
                    artists: response1.data.item.artists.map((artist) => artist.name),
                    image: response1.data.item.album.images[2].url,

                };    
                dispatch({ type: reducerCases.SET_PLAYING, playing });
            }else dispatch({ type: reducerCases.SET_PLAYING, playing: null });
                
            }
        const changeState = async () => {
                const state = playerState ? "pause" : "play"
                await axios.put(
                    `https://api.spotify.com/v1/me/player/${state}`, {}, 
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                });
                dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState });
        } 



    const setVolume = async (e) => {
        await axios.put(
            `https://api.spotify.com/v1/me/player/volume`, {}, 
        {   
            params: {
                volume_percent: parseInt(e.target.value),
            },
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        });
        dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState });
    }



    
return(
    <>
    <div className="audioContainer">
        <div className="audio">
            <div className="audioTop">
                <div id="audioTop">
                    <i><CiHeart /></i>
                    <i><BsMusicNoteBeamed /></i> 
                    <i><BsArrowsAngleExpand /></i>
                </div>
                <div className="audioplay">
                    
                    <div id="audioplay">
                        <i><TbRepeat /></i>
                        <i onClick={() => changeTrack("previous")}><GrChapterPrevious /></i>
                        <div className="played">
                        <i>
                            { playerState ?
                                <BsFillPauseCircleFill onClick={changeState}/>
                                :
                            <BsFillPlayCircleFill onClick={changeState}/>
                            }
                        </i>
                        </div>
                        <i onClick={() => changeTrack("next")}><GrChapterNext /></i>
                        <i><IoShuffleOutline /></i>
                    </div>
                    <div className="volume">
                        
                            <i><RxSpeakerModerate /></i>
                            <div className="range"><input type='range' min={0} max={100}
                            onMouseUp={(e => setVolume(e))}/> </div>
                            <i><RxSpeakerLoud /></i>
                            {/* <Trial isTrackPlaying={true}/> */}
                       
                    </div>
                </div>
            </div>
            <div className="playRange">
                            <p>00:00</p>
                            <input type='range' className="range"/>
                            <p>00:00</p>

            </div>
        </div>
    </div>
    </>
)
}
