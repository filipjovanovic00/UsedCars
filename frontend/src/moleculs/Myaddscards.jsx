import React, { useState } from "react";
import Myaddscard from "../atoms/Myaddscard";

export default function Myaddscards(){

    const [myAdds,setMyAdds]=useState([1,1,1,1,1,1,1,1,1,1,]);

    return(
        <div className="row m-0 p-0 justify-content-center">
            <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                {myAdds && myAdds.map((item,index) => (
                    <Myaddscard key={index} car={item}/>
                 ))}
            </div>
        </div>
    );
}