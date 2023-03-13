import React, { useEffect } from 'react'
import './sideBar.css'
import Menu from './SideBarList/Menu'
import { SiMoleculer } from 'react-icons/si'
import { MdMenuOpen } from 'react-icons/md'
import { RiArrowRightSLine } from 'react-icons/ri'
import image  from '../asset/image.avif'
import axios from 'axios'
import { useStateProvider } from '../../Utils/StateProvider'
import { reducerCases } from "../../Utils/Constant";

function SideBar(){
    const [{token, userInfo }, dispatch ] = useStateProvider();

    useEffect(() => {
        const getUserInfo = async () =>{
            const { data } = await axios.get("https://api.spotify.com/v1/me" , {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }); 
            const userInfo = {
                userId: data.id,
                userName: data.display_name,
                userImage: data.images[0].url,
            }
            dispatch({type:reducerCases.SET_USER, userInfo})
        }
        getUserInfo();
    }, [dispatch, token, userInfo])


return(
    <>
        <div className='sideBar'>
            <div className="openBtn">
                <i><MdMenuOpen /></i>
            </div>
            <div className='logo'>
                <i><SiMoleculer /></i>
                <h3 className='bee'>Bee</h3>
                <h3>Music</h3>
            </div>
            <div className='Menu'>
                <Menu />
            </div>
        </div>
        <div className='hr'>
                <hr/>
        </div>
       
            {
                userInfo &&
                <div className='sideBar' id='sideFooter' key={userInfo.userId}>
                    {
                        userInfo === true && ""?
                        <img src={image} alt='' />:
                        <img src={userInfo.userImage} alt='' />
                        
                    }      
                    <div id='sideName'>
                    { 
                        userInfo === true?
                        <p>Ceptari Tyas</p>:
                        <p>{userInfo.userName}</p>
                        
                    }
                    <i><RiArrowRightSLine /></i>
                </div>
                </div>
            }
        

     
    </>
    )
}
export default SideBar