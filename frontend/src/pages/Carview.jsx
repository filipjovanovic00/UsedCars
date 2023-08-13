import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../atoms/Carousel";

export default function Carview(){

    const [car,setCar]=useState("");
    const {id}= useParams();

    useEffect(() => {
        const getCar=async(e)=>{
            try {
                const response = await axios.get("https://localhost:5001/api/Car/" + id);
                setCar(response.data);
            } catch (error) {
                alert(error);
            }
        }
        getCar();
    },[]);

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
                    <div className="row m-3 p-3" style={{borderRadius:'15px',backgroundColor:'gray',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div className="row justify-content-start"><h4 style={{color:'white'}}><b>Informacije o vozilu:</b></h4></div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Marka: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>Audi {car.mark}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Model: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>Q5 {car.model}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Godiste: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>2009. {car.year}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Kilometraza: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>170.000{car.mileage} km</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Tip automobila: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>SUV {car.type}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Pogon: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>Pogon na sva cetiri tocka {car.driveType}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" style={{borderBottom:'solid',borderBottomWidth:'thin'}}>
                                    <div className="col-md-6 p-0">
                                        <p className="m-0 p-0" style={{color:'black'}}>Menjac: </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="m-0 p-0" style={{color:'black'}}><b>Manuelni {car.gearBoxType}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-3 p-3" style={{borderRadius:'15px',backgroundColor:'gray',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div className="row justify-content-start"><h4 style={{color:'white'}}><b>Opis:</b></h4></div>
                        <div className="row">
                            <p className="text-break">{car.description}Audi Q3 40TFSI 190 Quattro S Tronic Webasto
                                Salonsko stanje automobila. Presao samo 25.000km. Prva registacija 04.2020. Nikad udaran, prva farba!
                                Prilika koja se ne propusta!!!
                                Vozilo u garanciji do 2025.04 ili do 100.000km
                                -LED Matrix farovi, LED svetla pozadi, Dynamic migavci
                                -Quattro pogon
                                -Bang & Olufsen ozvucenje
                                -Webasto
                                -Audi sense senzor za sudar
                                -Pracenje traka
                                -Front assist, side assist
                                -Grejaci sedista
                                -Rikverc kamera
                                -Parking senzori
                                -Senzori mrtvog ugla
                                -Senzori za svetla i kisu
                                -Prepoznavanje saobracajnih znakova
                                -Ambijentalno osvetljenje
                                -Digitalna Aut. dvozonska klima
                                -Adaptivni tempomat
                                -Virtual cocpit
                                -Postolje za punjenje telefona
                                -Fabricka Euro kuka
                                -Elektro gepek
                                -DAB+ , aplikacije, wifi, bluetooth..
                                -2 kljuca + Web
                                Itd..
                                Auto ima dva seta tockova, 8 Alu felni.
                                -Letnje nove gume Hankook
                                -Zimske nove gume Nokian
                                Dozvoljen svaki vid provere kod Vaseg majstora ili u ovlascenom Autokomerc servisu. Dajemo br. sasije za izvestaj sa carVerticala.
                                Auto mirise na novo, sa malom kilometrazom, bez ikakvog traga koriscenja. Garantujemo za predjene kilometrazu.
                                Dovezen je na tockovima. Ako imate jos dodatnih pitanja slobodno pozovite.
                                Srecna kupovina !</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 w-34">
                    <div className="row my-5 p-1"style={{borderRadius:'15px',backgroundColor:'gray',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div className="row " >
                            <div className="col-md-4">
                                <h4 className="my-2">Cena: </h4>
                            </div>
                            <div className="col-md-7">
                                <h2 className="my-1"><b>33.000{car.price} €</b></h2>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-4">
                                <h6 className="my-2">Lokacija: </h6>
                            </div>
                            <div className="col-md-7">
                                <h6 className="my-2">Kragujevac{car.location}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}