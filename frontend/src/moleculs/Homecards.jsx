import React, { useState } from "react";
import Homecard from "../atoms/Homecard";
import '../style/style.css';

export default function Homecards(props){
    return(
        <div className="container  p-1 ">
            <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                {props.cars && props.cars.map((item) => (
                    <Homecard key={item.id} car={item}/>
                 ))}
            </div>
        </div>
    );
}