import React from "react";

export default function Myaddscard(props){
    return(
        <div className="card m-1" style={{width: "100%"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require('../images/car.jpg')} className="img-fluid rounded-start rounded-end m-1" alt="..." ></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Naziv automobila</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}