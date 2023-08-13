import React from "react";
import '../style/style.css';

export default function Myaddscard(props){
    return(
        <div className="card m-1" style={{width: "100%",backgroundColor:'gray'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require('../images/car.jpg')} className="img-fluid rounded-start rounded-end m-1" alt="..." ></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="card-title">{props.car.mark} {props.car.model}</h3>
                            </div>
                            <div className="col-md-4">
                                <small ><i className="fa-solid fa-location-dot" style={{color: '#282929'}}></i><em>{props.car.location}</em></small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mx-0 px-0">
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6" >
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b> {props.car.mark}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b> {props.car.model}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b> {props.car.year}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.price} {/*km*/}</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mx-0 px-0">
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b> {/*props.car.type*/}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{/*props.car.driveType*/}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{/*props.car.gearBoxType*/}</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{/*props.car.mileage*/}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-start p-3" style={{width:'max'}}>
                            <div className="col-md-4 m-0 p-0 justify-content-center">
                                <button className="btn btn-primary custom-btn">Promeni cenu i kilometrazu</button>
                            </div>
                            <div className="col-md-4 m-0 p-0 justify-content-center">
                                <button className="btn btn-danger custom-btn">Obrisi!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}