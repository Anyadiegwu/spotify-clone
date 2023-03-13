import React, { useEffect } from "react";
import Playlist from "../../Playlist/Playlist/Playlist";
import MainMenu from "./MainMenu/MainMenu";
import './Menu.css'




function Menu (){

    useEffect(() => {
        const menuList = document
        .querySelector('.menuContainer')
        .querySelectorAll('ul li');
        console.log(menuList)
        const makeMenuActive = () => {
            menuList.forEach((menu) => menu.classList.remove('active'));
            menuList.forEach((menu) => menu.classList.add('active'));
            console.log("active")
            console.log("unactive")         
        }
       
        menuList.forEach((menu) => menu.addEventListener("click", makeMenuActive))
    }, [])
return(
    <>
        <div className="menuContainer">
            <div className="listContainer">
                <ul>
                        {MainMenu.map((menu) => (
                                <li key={menu.id}>
                                    <a href="#">
                                        <i>{menu.icon}</i>
                                        <span>{menu.name}</span>
                                    </a>
                                </li>
                            ))}

                </ul>
            </div>         
            <div className="listPlaylist">
                <p>Your Playlist</p>
                <div className="playlist">   
                <Playlist />
                </div>
            </div>     
        </div>
    </>
)
}
export default Menu;