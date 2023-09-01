import React from "react";
import '../style/style.css';
import axios from "axios";

export default function Adminworkcard(props){
    const approveCar=async()=>{
        try {
            const response = await axios.put("https://localhost:5001/api/Car/approvecar/"+props.car.id);
            alert("Oglas je uspesno odobren!");
            props.deleteCar(props.car.id);
        } catch (error) {
            alert("oglas nije moguce odobriti. Molimo pokusajte kasnije ");
        }
    }
    return(
        <div className="card my-1 car-card" style={{width: "100%",border:'solid',borderColor:'#993333',backgroundColor:'#EEEFFF'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={("data:image/jpeg;base64,"+props.car.picture)} className="img-fluid rounded-start rounded-end m-1" alt="..." style={{maxHeight:'287px',minHeight:'287px',maxWidth:'420px'}}></img>
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
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b> {props.car.year} god.</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mx-0 px-0">
                                <div className="row justify-content-start m-2" >
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b>{props.car.price} €</b></p>
                                    </div>
                                </div>
                                <div className="row justify-content-start m-2" >
                                    <div className="col-md-6">
                                        <p className="m-0 p-0 text-start" style={{color:'black',borderBottom:'solid',borderBottomWidth:'thin'}}><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> <b> {props.car.mileage} km</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-start p-3" style={{width:'max'}}>
                            <div className="col-md-4 m-0 p-0 justify-content-center">
                                <button className="btn btn-success custom-btn" type="button" on onClick={approveCar}>Odobri oglas!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}