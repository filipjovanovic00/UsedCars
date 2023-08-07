import React from "react";
import { Link } from "react-router-dom";
import Header from "../moleculs/Header";
import Searchbar from "../moleculs/Searchbar";
import Homecards from "../moleculs/Homecards";

export default function Homepage(){
    return(
        <>
        <Searchbar/>
        <Homecards />
        </>
    )
}