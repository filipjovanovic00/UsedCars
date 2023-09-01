import React, { useEffect, useState } from "react";
import Myaddscards from "./Myaddscards";
import axios from "axios";
import { setToken } from "../auth/Settoken";

export default function Myadds(){

    const [cars,setCars]=useState([]);

    const setAuthToken = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
        }
    };

    const getAllApproved=async(e)=>{
        await setAuthToken();
        try {
            const response = await axios.get('https://localhost:5001/api/Car/userapproved');//Promeniti da se dobijaju odobreni automobili jednog korisnika
            setCars(response.data);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(()=>{
        getAllApproved();
    },[])

    const deleteCar = (id) => {
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
    };

    return(
        <>
        {cars.length==0?(<div className="container  d-flex justify-content-center align-items-center" style={{height:'400px'}}> 
                                                <div className="spinner-border my-5" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>):(<Myaddscards cars={cars} deleteMyCar={deleteCar}/>)}
        </>
    );
}