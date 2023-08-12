import React, { useState } from "react";
import Onwaitcard from "../atoms/Onwaitcard";


export default function Onwaitcards(){

    const [myAdds,setMyAdds]=useState([1,1,1,1,1,1,1,1,1,1,]);

    return (
        <div className="row m-0 p-0 justify-content-center">
            <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                {myAdds && myAdds.map((item,index) => (
                    <Onwaitcard key={index} car={item}/>
                 ))}
            </div>
        </div>
    );
}