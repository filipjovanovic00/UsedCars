import React from "react";
import { Link } from "react-router-dom";
import '../style/style.css'

export default function Homecard(props){
    return(
        <Link className="card p-0 mx-1 car-card" to={`carview/${props.car.id}`} style={{width:"300px",height:"300px",textDecoration:"none"}}>
            <img src={("data:image/jpeg;base64,"+props.car.picture)} className="card-img-top" alt="..." style={{height:"170px"}}></img>
            <div className="card-body">
                <h5 className="card-title">{props.car.mark} {props.car.model}</h5>
                <p className="card-text">{props.car.year}. god.</p>
            </div>
            <div className="card-footer " style={{backgroundColor:"#097969"}}>
                <small className="text-muted"><b style={{color:"white"}}>- {props.car.price} €</b></small>
            </div>
        </Link>
    );
}