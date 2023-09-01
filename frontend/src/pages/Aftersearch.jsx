import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aftersearchcards from "../moleculs/Aftersearchcards";


export default function Aftersearch(){
    const {searchparam}= useParams();
    const [cars,setCars]=useState([]);
    const [extractedParams, setExtractedParams] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState("10");
    const [lastPage,setLastPage]=useState(false);

    const firstPage=()=>{
        setPage(0);
        setLastPage(false);
    };

    const prevPage=()=>{
        setPage(page-1);
        setLastPage(false);
    };
    
    const nextPage=()=>{
        setPage(page+1)
    };

    const searchIt=async(e)=>{
        if (searchparam==="none"){
            try {
                var x = `https://localhost:5001/api/Car/approved?`+`pageNumber=${page+1}&` +
                `pageSize=${size}`;
                const response = await axios.get(x);
                setCars(response.data);
                if (response.data.length < parseInt(size, 10)){
                    setLastPage(true);
                }
            } catch (error) {
                alert(error);
            }
        }else{
            try {
                var x = `https://localhost:5001/api/Car/approved?`+"pageNumber=1&" +
                "pageSize=10&"+searchparam;
                const response = await axios.get(x);
                setCars(response.data);
            } catch (error) {
                alert(error);
            }
        }
        
    }

    useEffect(()=>{
        searchIt();
        extractParamsFromString();
    },[page])

    const extractParamsFromString = () => {
        const params = searchparam.split('&');
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

    return(
        <div className="container">
            <div className="row justify-content-center mt-3 p-3">
                <div className="col-md-3 mx-0 px-0">
                    <div className="row justify-content-center">
                        <h4><i className="fa-solid fa-arrow-right" style={{color: "#000000"}}></i>Prametri pretrage:</h4>
                    </div>
                </div>
                <div className="col-md-7 mx-0 px-0">
                    <h4><b>{extractedParams.join(", ")}</b></h4>
                </div>
            </div>
            <div className="row align-items-center justify-content-around my-2 p-2" style={{backgroundColor:'lightgray',borderRadius:'10px'}}>
                <div className='col-md-3 text-center'>
                    <h4 style={{textDecoration:'underline'}}>Strana {page+1}</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <button className='btn btn-outline-succsess' type='button' disabled={page === 0 ? true : false} onClick={firstPage}>Prva </button>
                    <button className='btn btn-outline-succsess' type='button' disabled={page === 0 ? true : false} onClick={prevPage}>Prethodna</button>
                    <button className='btn btn-outline-succsess' type='button' disabled={true} >{page+1}</button>
                    <button className='btn btn-outline-succsess' type='button' disabled={lastPage? true : false} onClick={nextPage}>Sledeća</button>
                </div>
            </div>
            <div className="row">
                <Aftersearchcards cars={cars}/>
            </div>
        </div>

    );
}