import React from "react";

export default function Searchcard(props){
    return(
        <div className="row justify-content-start my-2"  style={{height:'70px',backgroundColor:'gray',border:'solid',borderWidth:'thin',borderRadius:'10px',borderColor:"darkgreen",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)"}}>
            <div className="col-md-8">
                <div className="row justufy-content-center my-4">
                    <h6 className="">Audi{props.car.mark}, Karavan{props.car.type}</h6>
                </div>
            </div>
            <div className="col-md-4 " style={{height:'max'}}>
                <div className="row">
                    <div className="col-md-6 m-0 p-0 justify-content-center">
                        <button className="btn btn-primary custom-btn-delete p-2 m-3">Obrisi!</button>
                    </div>
                    <div className="col-md-6 m-0 p-0 justify-content-center">
                        <button className="btn btn-danger custom-btn-search p-2 m-3">Pretrazi!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}