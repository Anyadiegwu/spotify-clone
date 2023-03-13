import axios from "axios";
import React, { useEffect, useRef } from "react";
import './Songs.css'
import { reducerCases } from "../../Utils/Constant";
import { useStateProvider } from "../../Utils/StateProvider";
import { HiOutlineSpeakerWave } from 'react-icons/hi2'


function Songs(){
    const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] = useStateProvider();

    const songRef = useRef();
    // const [activeSong, setActiveSong] = useState(false);


    useEffect(() =>{
        const getInitialPlaylist = async () =>{
            const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        const selectedPlaylist = {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description.startsWith("<a") ? "" 
            : response.data.description,
            image: response.data.images[0].url,
            tracks: response.data.tracks.items.map(({ track}) =>({
                id: track.id,
                name: track.name,
                artists: track.artists.map((artist) => artist.name),
                duration: track.duration_ms,
                album: track.album.name,
                context_uri : track.album.uri,
                track_number: track.track_number,
            })),  
        };
       dispatch({type: reducerCases.SET_PLAYLIST, selectedPlaylist})
        };
    
        getInitialPlaylist();
    },[token, dispatch, selectedPlaylistId])

 const time = (ms) => {
    const minutes = Math.floor(ms/60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? "0" : "") + seconds;
 }

 const playTrack = async (id, name, artists, 
    context_uri, track_number) => {
   const response = await axios.put(
        `https://api.spotify.com/v1/me/player/play`, {
            context_uri,
            offset: {
                position: track_number -1,
            },
            position_ms: 0,
        }, 
    {
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    });
    if(response.status ===204){
        const playing = {
            id,
            name,
            artists
        };
        dispatch({ type: reducerCases.SET_PLAYING, playing})
        dispatch({ type:reducerCases.SET_PLAYER_STATE, playerState: true})
    }else dispatch({ type:reducerCases.SET_PLAYER_STATE, playerState: true})
 }
return(
    <>
        <div>
    {
        selectedPlaylist && (
        <div>
        <div className="playlist">
                <div className="playlistHeader">
                    <h2>My Playlist</h2>
                    <p>Show All</p>
                </div>
                <div className="playlistHandle" id="headerTag">
                    <div className="playlistH-Header">
                        <div className="index">
                            <p>#</p>
                        </div>
                        <div className="title">
                            <p>TITLE</p>
                            <div className="artist">
                                <p>ARTIST</p>
                                <div className="time">
                                    <p>TIME</p>             
                                    <div className="album">   
                                        <p>ALBUM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  
            <div className="playlistHandle" id="playlistHandle">                        
            {
                selectedPlaylist.tracks.map(({
                    id,
                    name,
                    artists,
                    duration,
                    album,
                    context_uri,
                    track_number,
                }, index) =>
                    <div className="playlistH-Header" 
                        id="playlistH-Header"
                        key={id}
                        ref={songRef}
                        onClick={()=> playTrack(id, name, artists, 
                            context_uri, track_number)} 
                        >
                        <div className="index">
                            <p>
                            { playTrack && index  < 9 ? 
                                `0${index + 1}`  :
                                playTrack && index >= 9  ?
                                `${index + 1}` : <HiOutlineSpeakerWave />
                            }
                            </p>
                        </div>
                        <div className="title" id="title">
                                <p>{name}</p>
                                <div className="artist" id="artist">
                                    <p>{artists}</p>
                                    <div className="time">
                                        <p>{time(duration)}</p>
                                        <div className="album">
                                        <p>{album}</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    )
                }
            </div>
            </div>
            </div>  
        )
    }
        </div>
    </>
)

}

export default Songs;


