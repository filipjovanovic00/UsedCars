import React from "react";
import { Link } from "react-router-dom";

export default function Aftersearchcard(props){
    return(
        <Link className="card m-2 car-card"  to={`carview/${props.car.id}`} style={{width: "100%",backgroundColor:'#097969',textDecoration:'none'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require('../images/car.jpg')} className="img-fluid rounded-start rounded-end m-1" alt="..." ></img>
                </div>
                <div className="col-md-8 ">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="card-title">{props.car.mark} {props.car.mark}</h3>
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
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.year}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.mileage} km</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mx-0 px-0">
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.type}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.driveType}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.gearBoxType}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}