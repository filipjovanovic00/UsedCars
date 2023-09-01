import React, { useState } from "react";
import Onwaitcard from "../atoms/Onwaitcard";
import { useEffect } from "react";
import axios from "axios";

export default function Onwaitcards(){

    const [cars,setCars]=useState([]);

    const setAuthToken = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
        }
    };

    const getAllNotApproved=async(e)=>{
            await setAuthToken();
            await axios.get('https://localhost:5001/api/Car/usernotapproved')
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                alert("Žao nam je, trenutno ne možemo da prikažemo dostupne automobile jer imamo problema sa učitavanjem podataka iz naše baze. Hvala na razumevanju.")
            });
    }

   
    useEffect(()=>{
        getAllNotApproved();
    },[])

    const deleteCar = (id) => {
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
    };

    return (
        <>
        {cars.length==0?(<div className="container  d-flex justify-content-center align-items-center" style={{height:'400px'}}> 
                                                <div className="spinner-border my-5" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>):(<div className="row m-0 p-0 justify-content-center" style={{minHeight:'400px'}}>
                                                        <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center align-items-center">
                                                                        {cars && cars.map((item,index) => (
                                                                        <Onwaitcard key={index} car={item} deleteMyCar={deleteCar}/>
                                                                        ))}
                                                        </div>
                                                    </div>)}
        </>
        
    );
}