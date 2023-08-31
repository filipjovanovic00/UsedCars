import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aftersearchcards from "../moleculs/Aftersearchcards";


export default function Aftersearch(){
    const {searchparam}= useParams();
    const [cars,setCars]=useState([]);

    const searchIt=async(e)=>{
        try {
            var x = `https://localhost:5001/api/Car/approved?`+"pageNumber=1&" +
            "pageSize=10&"+searchparam;
            const response = await axios.get(x);
            setCars(response.data);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(()=>{
        searchIt();
    },[])

    return(
        <div className="container">
            <div className="row justify-content-center mt-3 p-3">
                <div className="col-md-3 mx-0 px-0">
                    <div className="row justify-content-center">
                        <div className="col-md-2 p-0">
                            <i className="fa-solid fa-arrow-right" style={{color: "#000000"}}></i>
                        </div>
                        <div className="col-md-10  p-0">
                            <h4>Prametri pretrage:</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mx-0 px-0">
                    <h4><b>{searchparam}</b></h4>
                </div>
            </div>
            <Aftersearchcards cars={cars}/>
        </div>

    );
}