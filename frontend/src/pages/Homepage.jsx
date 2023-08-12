import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../moleculs/Header";
import Searchbar from "../moleculs/Searchbar";
import Homecards from "../moleculs/Homecards";
import Searchcards from "../moleculs/Searchcards";

export default function Homepage(){

    const [cars,setCars]=useState([]);
    const [afterSeacrh,setAfterSearch]=useState("no");

    return(
        <>
        <Searchbar setCars={setCars} setAfterSearch={setAfterSearch}/>
            {afterSeacrh==="no"?<Homecards cars={cars}/>:<Searchcards cars={cars}/>}
        </>
    )
}