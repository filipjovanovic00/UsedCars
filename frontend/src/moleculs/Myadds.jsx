import React, { useEffect, useState } from "react";
import Myaddscards from "./Myaddscards";
import axios from "axios";

export default function Myadds(){

    const [cars,setCars]=useState([]);
    const [errorMsg,setErrorMsg]=useState("");

    const getAllApproved=async(e)=>{
        try {
            const response = await axios.get('https://localhost:5001/api/Car/approved');//Promeniti da se dobijaju odobreni automobili jednog korisnika
            console.log(response.data);
            setCars(response.data);
            console.log('Uspesno primljeni podaci');
        } catch (error) {
            setErrorMsg(error);
            alert(error);
        }
    }
    useEffect(()=>{
        getAllApproved();
    },[])

    return(
        <>
        {cars.length==0?(<div className="container  d-flex justify-content-center align-items-center" style={{height:'300px'}}> 
                                                <div className="spinner-border my-5" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>):(<Myaddscards cars={cars}/>)}
        </>
    );
}