import React from "react";
import { Link } from "react-router-dom";
import '../style/style.css'

export default function Homecard(props){
    return(
        <Link className="card p-0 mx-1 car-card" to="carview" style={{width:"300px",height:"300px",textDecoration:"none"}}>
            <img src={require('../images/car.jpg')} className="card-img-top" alt="..." style={{height:"170px"}}></img>
            <div className="card-body">
            <h5 className="card-title">Naziv Automobila{props.car.name}</h5>
            <p className="card-text">2009.{props.car.yearOfManifac} god</p>
            </div>
            <div className="card-footer " style={{backgroundColor:"#097969"}}>
            <small className="text-muted"><b style={{color:"white"}}>- {props.car.price}3500 €</b></small>
            </div>
        </Link>
    );
}