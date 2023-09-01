import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Searchcard(props){
    
    const [extractedParams, setExtractedParams] = useState([]);

    const deleteMySearch=async ()=>{
        try {
            const response = await axios.delete('https://localhost:5001/api/SavedSearch/'+props.mySearch.id);
            props.deleteSearch(props.mySearch.id);
            alert('Sacuvana pretraga je uspesno obrisan');
        } catch (error) {
            alert(error);
        }
    }

    const extractParamsFromString = (value) => {
        const params = value.split('&');
        const extractedParams = params.map((param) => {
          const keyValue = param.split('=');
          if (keyValue.length === 2) {
            const key = keyValue[0];
            const value = keyValue[1];
            if (key === 'km') {
              return `${value} km`;
            } else if (key === 'price') {
              return `${value} €`;
            } else if (key==="yearStart"){
                return `od ${value} `;
            } else if (key==="yearEnd"){
                return `do ${value} `;
            } else {
                return `${value} `;
            }
            }
            return null
        });
    
        setExtractedParams(extractedParams);
      };

    useEffect(()=>{
        if (typeof props.mySearch.search === 'string' && props.mySearch.search !== "") {
            extractParamsFromString(props.mySearch.search);
        }
    },[props.mySearch.search])

    return(
        <div className="row justify-content-start my-2"  style={{height:'70px',backgroundColor:'gray',border:'solid',borderWidth:'thin',borderRadius:'10px',borderColor:"darkgreen",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19)"}}>
            <div className="col-md-8">
                <div className="row justufy-content-center my-4">
                    <h6 className=""><i className="fa-solid fa-circle-dot" style={{color: '#000000'}}></i> {extractedParams.join(", ")}</h6>
                </div>
            </div>
            <div className="col-md-4 " style={{height:'max'}}>
                <div className="row">
                    <div className="col-md-6 m-0 p-0 justify-content-center">
                        <button className="btn btn-primary custom-btn-delete p-2 m-3" type="button" onClick={deleteMySearch}>Obrisi!</button>
                    </div>
                    <div className="col-md-6 m-0 p-0 justify-content-center">
                        <Link className="btn btn-success custom-btn p-2 m-3" type="button" to={`search/${props.mySearch.search}`} style={{textDecoration:'none'}}>Pretrazi!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}