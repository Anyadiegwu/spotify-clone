import React, { useEffect } from "react"
import { useStateProvider } from '../../../Utils/StateProvider'
import axios from "axios";
import { reducerCases } from "../../../Utils/Constant";
import './Playlist.css'

function Playlist(){

    
    const [{ token, playlists }, dispatch ] = useStateProvider();
    useEffect(() =>{
        const getPlaylistData = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists", 
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            const { items } = response.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            });
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getPlaylistData();
    }, [token, dispatch])

    const changeCurrentPlaylist = (selectedPlaylistId ) => {
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    }
    return(
        <>
            <div className="shortPlaylist">
                <ul>
                {
                    playlists.map(({name, id}) => {
                        return(
                        <li key={id} onClick={()=> changeCurrentPlaylist(id)}>{name}</li>
                        )
                    })
                }
                </ul>
            </div>
        </>
    )

}

export default Playlist