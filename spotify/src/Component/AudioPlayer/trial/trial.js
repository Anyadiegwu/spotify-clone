// import React, { useEffect } from "react";
// import { useStateProvider } from '../../Utils/StateProvider';
// import axios from 'axios';
// import { reducerCases } from "../../Utils/Constant";


// export default function Trial(){
//     const [{ token, track }, dispatch] = useStateProvider();

//     useEffect(() =>{
//         const getCurrentImg = async () => {
//             const response = await axios.get(
//                 "https://api.spotify.com/v1/me/tracks/id", 
//             {
//                 headers: {
//                     Authorization: "Bearer " + token,
//                     "Content-Type": "application/json",
//                 },
//             });
//             if(response.data !== ""){
//                 const { item } = response.data;
//                 const track = {
//                     id: item.id,
//                     name: item.name,
//                     artists: item.artists.map((artist) => artist.name),
//                     image: item.album.images[2].url,
//                     preview_url: item.preview_url,
//                 };
//             dispatch({ type: reducerCases.SET_TRACK, track });
//             }
            
//         };
//         getCurrentImg();
//     }, [token, dispatch, track])

// return(
//     <>
//     <div>
//     <audio src={track.preview_url} controls=""/>
//     </div>

//     </>
// )
// }

import React from "react";
import { useStateProvider } from '../../../Utils/StateProvider';
import axios from 'axios';
// import { reducerCases } from "../../Utils/Constant";
import { RxSpeakerModerate, RxSpeakerLoud } from 'react-icons/rx'


export default function Trial({isTrackPlaying}) {

    const [initialState] = useStateProvider();
    const { token } = initialState;
    const setVolume = async (e) => {
      if(isTrackPlaying) {
      await axios.put(
        `https://api.spotify.com/v1/me/player/volume`,
        {},
        {
          params: {
            volume_percent: parseInt(e.target.value),
          },
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      }
    };

return(
    <>
        <div className="volume">
                        
            <i><RxSpeakerModerate /></i>
            <div className="range"><input type='range' min={0} max={100}
                onMouseUp={(e => setVolume(e))}/> </div>
            <i><RxSpeakerLoud /></i>
                   
        </div>
    </>
)
}




