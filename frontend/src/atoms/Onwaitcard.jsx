import React from "react";
import '../style/style.css';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Onwaitcard(props){

    const deleteCar=async ()=>{
        try {
            const response = await axios.delete('https://localhost:5001/api/Car/deletecar/'+props.car.id);
            props.deleteMyCar(props.car.id);
            alert('Oglas je uspesno obrisan');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="card m-1 car-card-user" style={{width: "100%",border:'solid',borderColor:'#993333',backgroundColor:'#EEEFFF'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={("data:image/jpeg;base64,"+props.car.picture) } className="img-fluid rounded-start rounded-end m-1" alt="..." style={{maxHeight:'287px',minHeight:'287px',maxWidth:'400px'}}></img>
                </div>
                <div className="col-md-8 pending-card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="card-title">{props.car.mark} {props.car.model}</h1>
                            </div>
                            <div className="col-md-4">
                                <small ><i className="fa-solid fa-location-dot" style={{color: '#282929'}}></i><em>Lokacija</em></small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mx-0 px-0">
                                <div className="row justify-content-start m-2" >
                                    <div className="col-md-6" >
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.mark}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.model}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.year} god.</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mx-0 px-0">
                            <div className="row justify-content-start m-2" >-
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.price} €</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.mileage} km</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end p-3" style={{width:'max'}}>
                            <div className="col-md-2 m-0 p-0 justify-content-center">
                                <button className="btn btn-danger custom-btn-delete" onClick={deleteCar} type="button">Obrisi!</button>
                            </div>
                            <div className="col-md-2 m-0 p-0 justify-content-center">
                                <Link className="btn btn-success custom-btn" type="button"  style={{textDecoration:'none',color:'white'}} to={`carview/${props.car.id}`}>Vise...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}