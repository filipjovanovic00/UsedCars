import React, { useState } from "react";
import Searchcard from "../atoms/Searchcard";

export default function Savedsearch(){

    const [mySearch,setMySearch]=useState([1,1,1,1,1,1,1,1,1,1,]);

    return(
        <div className="row m-0 p-0 justify-content-center">
            <div className="col-md-8  justify-content-center">
                {mySearch && mySearch.map((item,index) => (
                    <Searchcard key={index} car={item}/>
                 ))}
            </div>
        </div>
    );
}