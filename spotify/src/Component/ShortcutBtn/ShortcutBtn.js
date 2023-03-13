import React from "react";
import './ShortcutBtn.css'
import { CgPiano } from 'react-icons/cg'
import { GiGuitar, GiTrumpet } from 'react-icons/gi'
import { SiCentos } from 'react-icons/si'
import { BsFillStarFill, BsMusicNoteBeamed } from 'react-icons/bs'

export default function ShortcutBtn(){
return(
    <>
        <div id="shortBtn">
            <h2>Shortcuts</h2>
            <div className="shortBtn">
                <a href=""><button className="btn1"><i><SiCentos /></i>Chill Hits</button></a>
                <a href="" className="shortBtn2"><button className="btn2"><i><BsFillStarFill /></i>Hop</button></a>
            </div>
            <div className="shortBtn">
                <a href=""><button className="btn3"><i><GiGuitar /></i>Accoustic</button></a>
                <a href="" className="shortBtn2"><button className="btn4"><i><BsMusicNoteBeamed /></i>Indie Pop</button></a>
            </div>
            <div className="shortBtn">
                <a href=""><button className="btn5"><i><CgPiano /></i>Piano Blues</button></a>
                <a href="" className="shortBtn2"><button className="btn6"><i><GiTrumpet /></i>Jazz</button></a>
            </div>
           
        </div>
    </>
)
}