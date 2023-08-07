import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../atoms/Carousel";

export default function Carview(){

    const [car,setCar]=useState("");
    const {id}= useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost:8080/car/get?id=" + id);
            setCar(result.data);
        };
        fetchData();
    },[id]);

    return(
        <div className="container my-0 p-1">
            <div className="row">
                <div className="col-md-8 w-66">
                    <div className="row p-0 m-0">
                        <h1 className="pt-3 pb-1"><b>Mercedes Benz E 220 d 2xAMG NIGHT PAKET{car.name}</b></h1>
                        <small> <h3>2009.{car.yearOfManifac} god.</h3></small>
                    </div>
                    <div className="row">
                        <Carousel />
                    </div>
                </div>
                <div className="col-md-4 w-34">

                </div>
            </div>
        </div>
    );
}