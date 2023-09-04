import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../atoms/Carousel";
import '../style/style.css';

export default function Carview(){

    const [car,setCar]=useState("");
    const [addCars, setAddCars]=useState("")
    const {id}= useParams();

    const getAddCar=async(e)=>{
        try {
            const response = await axios.get("https://localhost:5001/api/Car/approved?"+"pageNumber=1&" + "pageSize=10&"+`mark=${car.mark}`);
            setAddCars(response.data);
        } catch (error) {
            alert(error);
        }
    }
    const getCar=async(e)=>{
        try {
            const response = await axios.get("https://localhost:5001/api/Car/" + id);
            setCar(response.data);
            getAddCar();  
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        getCar();
    },[]);

    

    return(
        <>
        <div className="container my-0 p-1">
            <div className="row">
                <div className="col-md-8 w-66  ">
                    <div className="row p-0 m-0">
                        <h1 className="pt-3 pb-1"><b>{car.mark} {car.model}</b></h1>
                        <small> <h3>{car.year} god.</h3></small>
                    </div>
                    <div className="row ">
                        <Carousel car={car.pictures}/>
                    </div>
                    <div className="row mx-3 my-4 p-3" style={{borderRadius:'15px',backgroundColor:'gray',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div className="row justify-content-start"><h4 style={{color:'white'}}><b>Informacije o vozilu:</b></h4></div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Marka: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>{car.mark}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Model: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>{car.model}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Godiste: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>{car.year}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Kilometraza: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>{car.mileage} km</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Tip automobila: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>{car.carBody}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Pogon: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>{car.driveType}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Menjac: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>{car.gearboxType}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Stanje: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>{car.state}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-3 p-3" style={{borderRadius:'15px',backgroundColor:'gray',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div className="row justify-content-start"><h4 style={{color:'white'}}><b>Opis:</b></h4></div>
                        <div className="row">
                            <p className="text-break">{car.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 w-34 ">
                    <div className="row my-5 p-1"style={{borderRadius:'15px',backgroundColor:'gray',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div className="row " >
                            <div className="col-md-4">
                                <h4 className="my-2">Cena: </h4>
                            </div>
                            <div className="col-md-7">
                                <h2 className="my-1"><b>{car.price} €</b></h2>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-4">
                                <h6 className="my-2">Lokacija: </h6>
                            </div>
                            <div className="col-md-7">
                                <h6 className="my-2">{car.location}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5 p-1"style={{borderRadius:'15px',backgroundColor:'#097969',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div className="row " >
                            <div className="col-md-4 text-break">
                                <h4 className="my-2 " style={{color:'white',whiteSpace:"nowrap",lineHeight:'1'}}>Vlasnik:</h4>
                            </div>
                            <div className="col-md-6">
                                <h4 className="my-2 " style={{color:'white',whiteSpace:"nowrap",lineHeight:'1'}}>{car.userName}</h4>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-3">
                                <h6 className="my-2" style={{color:'white'}}>Telefon: </h6>
                            </div>
                            <div className="col-md-7">
                                <h6 className="my-2" style={{color:'white'}}>{car.phone}</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-3">
                                <h6 className="my-2" style={{color:'white'}}>E-mail: </h6>
                            </div>
                            <div className="col-md-7">
                                <h6 className="my-2" style={{color:'white'}}>{car.email}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5 p-1"style={{borderRadius:'15px',backgroundColor:'gray',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        {addCars && addCars.map((item)=>{
                            car.id!==item.id?<img src={("data:image/jpeg;base64,"+item.picture)}  alt="..." style={{height:"510px",width:"300"}}></img>:<span></span>
                        })}
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
}