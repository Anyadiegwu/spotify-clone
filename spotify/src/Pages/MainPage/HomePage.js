import React from "react";
import './HomePage.css'
import SideBar from "../../Component/SideBar/sideBar";
import Center from "../../Component/CenterContainer/Center";
import RightContainer from "../../Component/RightContainer/RightContainer";
import { createContext, useContext, useReducer } from "react";


export const StateContext = createContext();

export default function Homepage ({children, initialState, reducer}){
return(
    <>
    <div>
        <div className="page">
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            <div className='toogleBar'><SideBar/></div>
                <div className="container"><Center /></div>
                <div className="rightContainer">
                    <RightContainer />
                </div>
                {children}
            </StateContext.Provider>
   
        </div>
 
    </div>
    </>
)
}

export const useStateProvider = () => useContext(StateContext)