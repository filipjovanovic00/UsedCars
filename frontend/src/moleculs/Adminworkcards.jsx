import React, { useEffect, useState } from "react";
import Adminworkcard from "../atoms/Adminworkcard";
import axios from "axios";

export default function Adminworkcards(){

    const [cars,setCars]=useState([])

    useEffect(() => {
        const getCars=async(e)=>{
            try {
                const response = await axios.get("https://localhost:5001/api/Car/notapproved");
                setCars(response.data);
            } catch (error) {
                alert(error);
            }
        }
        getCars();
    },[]);

    const deleteCar = (id) => {
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
    };

    return(
        <>
        {cars.length==0?(<div className="container  d-flex justify-content-center align-items-center" style={{height:'300px'}}> 
                                                <div className="spinner-border my-5" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>):(cars && cars.map((item) => (
                                                        <div className="m-0 p-0 "><Adminworkcard key={item.id} car={item} deleteCar={deleteCar}/></div>
                                                    )))}
        </>
    )
}