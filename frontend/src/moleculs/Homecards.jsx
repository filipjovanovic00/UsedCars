import React, { useState } from "react";
import Homecard from "../atoms/Homecard";

export default function Homecards(props){
    const [cards,setCards]=useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
    return(
        <div className="container  p-1">
            <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                {cards && cards.map((item,index) => (
                    <Homecard key={index} car={item}/>
                 ))}
            </div>
        </div>
    );
}