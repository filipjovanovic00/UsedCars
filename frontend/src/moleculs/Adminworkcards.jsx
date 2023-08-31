import React, { useEffect, useState } from "react";
import Adminworkcard from "../atoms/Adminworkcard";
import axios from "axios";

export default function Adminworkcards(){

    const [cars,setCars]=useState([])

    useEffect(() => {
        const getCars=async(e)=>{
            try {
                const response = await axios.get("https://localhost:5001/api/Car/");
                setCars(response.data);
            } catch (error) {
                alert(error);
            }
        }
        getCars();
    },[]);

    return(
        <>
        {cars.length==0?(<div className="container  d-flex justify-content-center align-items-center" style={{height:'300px'}}> 
                                                <div className="spinner-border my-5" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>):(cars && cars.map((item) => (
                                                        <Adminworkcard key={item.id} car={item}/>
                                                    )))}
        </>
    )
}