import React, { useState } from "react";
import Myadds from "../moleculs/Myadds";
import Savedsearch from "../moleculs/Savedsearch";
import Onwaitcards from "../moleculs/Onwaitcards";

export default function Profilepage(){

    const [activeTab, setActiveTab] = useState("tab1");

    const tabFirst = () => {
        setActiveTab("tab1");
    };

    const tabSecond = () => {
        setActiveTab("tab2");
    };

    const tabThird = () => {
        setActiveTab("tab3");
    };

    return(
        <div className="container p-0 mb-5" style={{backgroundColor:"black",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
            <div className="row m-0 p-0">
                <ul className="nav nav-tabs">
                    <li className="nav-item tab-hover">
                        <button className={activeTab === "tab1" ? "nav-link active" : "nav-link "} onClick={tabFirst} style={{textDecoration:"none",height:"100%",border:"none",borderRadius:'0px',backgroundColor: activeTab === "tab1" ? "#097969" : "transparent"}}><span style={{color:"white",fontSize:"20px"}}><b>Moji automobili</b></span></button>
                    </li>
                    <li className="nav-item tab-hover">
                        <button className={activeTab === "tab2" ? "nav-link active" : "nav-link "} onClick={tabSecond} style={{textDecoration:"none",height:"100%",border:"none",borderRadius:'0px',backgroundColor: activeTab === "tab2" ? "#097969" : "transparent"}}><span style={{color:"white",fontSize:"20px"}}><b>Na cekanju</b></span></button>
                    </li>
                    <li className="nav-item tab-hover">
                        <button className={activeTab === "tab3" ? "nav-link active" : "nav-link "} onClick={tabThird} style={{textDecoration:"none",height:"100%",border:"none",borderRadius:'0px',backgroundColor: activeTab === "tab3" ? "#097969" : "transparent"}}><span style={{color:"white",fontSize:"20px"}}><b>Sacuvane pretrage</b></span></button>
                    </li>
                </ul>
            </div>
            <div className="row m-0 p-0" style={{backgroundColor:'#5968B8'}}>
                        {activeTab === "tab1" ? <div className="m-0 p-0" style={{minHeight:'400px'}}><Myadds /></div>  
                                :(activeTab==="tab2"?<div className="m-0 p-0"><Onwaitcards /></div>
                                :(activeTab==="tab3"?<div className="m-0 p-0"><Savedsearch /></div>
                                :<div></div>))}
            </div>

        </div>
    );
}