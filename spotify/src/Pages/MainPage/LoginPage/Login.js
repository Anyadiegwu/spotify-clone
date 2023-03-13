import React from "react";
import './Login.css'
import { SiMoleculer } from 'react-icons/si'


function Login (){

    const connect = async () =>{
        const clientId = "a2804cd62b9942f1822cca36028762ed";
        const redirectUrl = window.location.href;
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-email", 
            "user-read-private,",
            "user-modify-playback-state",
            "user-read-playback-state",     
            "user-read-currently-playing", 
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read",        
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    }

return(
    <>
        <div className="loginHeader">
            <div className='loginLogo'>
                <div>
                    <i><SiMoleculer /></i>
                    <h3 className='loginBee'>Bee</h3>
                    <h3>Music</h3>
                </div>
                <button className="loginButton"
                onClick={connect}>Connect</button>
            </div>
        </div>
    </>
)
}
export default Login