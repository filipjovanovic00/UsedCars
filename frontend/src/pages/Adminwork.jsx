import React, { useState } from "react";
import Adminworkcards from "../moleculs/Adminworkcards";

export default function Adminwork(){

    const [activeTab, setActiveTab] = useState("tab1");

    const tabFirst = () => {
        setActiveTab("tab1");
    };

    return(
        <div className="container p-0 mb-5" style={{backgroundColor:"black",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
            <div className="row m-0 p-0">
                <ul className="nav nav-tabs">
                    <li className="nav-item tab-hover">
                        <button className="nav-link active" onClick={tabFirst} style={{textDecoration:"none",height:"100%",border:"none",borderRadius:'0px',backgroundColor: activeTab === "tab1" ? "#097969" : "transparent"}}><span style={{color:"white",fontSize:"20px"}}><b>Oglasi na cekanju!</b></span></button>
                    </li>
                </ul>
            </div>
            <div className="row m-0 p-0" style={{backgroundColor:'#5968B8'}}>
                <Adminworkcards />
            </div>
        </div>
    );
}