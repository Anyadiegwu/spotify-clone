import React from "react";
import Search from "../../Component/Search/Search";
import { AiFillFire } from 'react-icons/ai'
import { RiArrowRightSLine } from 'react-icons/ri'
import './Center.css'
import images from '../asset/images.jpeg'
import Button from "../Button/Button";
import Songs from "../Playlist/Songs";
import AudioPlayer from "../AudioPlayer/AudioPlayer";


export default function Center(){
return(
    <>
        <div className="centerBody">
            <div className='centerHeader'><Search /></div>
            <div className="trend">
                <p>What's hot<i><AiFillFire /></i></p>
                <div className="trendLink"> 
                    <h2>Trending</h2>
                        <a href="#">
                            <p>More</p>
                            <i><RiArrowRightSLine /></i>
                        </a>
                </div>
                <div className="carousel">
                    <img src={images} alt="" />
                    <div className="text">
                        <p>Artist</p>
                        <h2>On Top Of The World</h2>
                        <div className="btnCarousel">
                            <Button />
                            <div className="btnListener">
                                <p className="month">Monthly Listener 
                                <span className="span">32.092</span>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <div className="centerPlaylist">
                <Songs />
            </div>
            <div>
                <AudioPlayer />
            </div>
        </div>
    </>
)
}