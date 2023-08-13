import React, { useState } from "react";
import Myaddscard from "../atoms/Myaddscard";

export default function Myaddscards(props){

    return(
        <div className="row m-0 p-0 justify-content-center">
            <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                {props.cars && props.cars.map((item) => (
                    <Myaddscard key={item.id} car={item}/>
                ))}
            </div>
        </div>
    );
}