import React from "react";
import Aftersearchcard from "../atoms/Aftersearchcard";

export default function Aftersearchcards(props){
    return(
        <div className="container">
            <div className="row m-0 p-0 justify-content-center">
                <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                    {props.cars && props.cars.map((item) => (
                        <Aftersearchcard key={item.id} car={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}