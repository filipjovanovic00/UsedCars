import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../moleculs/Header";
import Searchbar from "../moleculs/Searchbar";
import Homecards from "../moleculs/Homecards";
import axios from "axios";
import Aftersearchcards from "../moleculs/Aftersearchcards";

export default function Homepage(){

    const [cars,setCars]=useState([]);

    const getCarsHome=async(e)=>{
        try {
            const response = await axios.get('https://localhost:5001/api/Car/approvedfirst');
            setCars(response.data);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(()=>{
        getCarsHome();
    },[])


    return(
        <>
        <Searchbar setCars={setCars} />
        {cars.length==0?(<div className="container  d-flex justify-content-center align-items-center"> 
                                                <div className="spinner-border my-5" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>):(<Homecards cars={cars} />)}                        
         </>
    )
}