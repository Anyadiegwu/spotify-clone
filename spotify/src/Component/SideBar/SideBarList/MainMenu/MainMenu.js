import React from 'react';
import {GrHomeRounded} from 'react-icons/gr'
import { IoNavigateCircleOutline } from 'react-icons/io5'
import { AiOutlineFund } from 'react-icons/ai'


const MainMenu = [{
    id: 1,
    name: "Home",
    icon: <GrHomeRounded />,
},
{
    id: 2,
    name: "Trends",
    icon: <AiOutlineFund />,
},
{
    id: 3,
    name: "Feed",
    icon: <IoNavigateCircleOutline />,
}]
export default MainMenu