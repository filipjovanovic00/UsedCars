import React, { useState } from "react";
import Searchcard from "../atoms/Searchcard";
import axios from "axios";
import { useEffect } from "react";

export default function Savedsearch(){

    const [mySearch,setMySearch]=useState([1,1,1,1,1,1,1,1,1,1,]);

    const setAuthToken = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
        }
    };

    const getSavedSearch=async(e)=>{
        await setAuthToken();
        try {
            const response = await axios.get('https://localhost:5001/api/SavedSearch');
            setMySearch(response.data);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(()=>{
        getSavedSearch();
    },[])

    const deleteSearch = (id) => {
        const updatedSearch = mySearch.filter(search => search.id !== id);
        setMySearch(updatedSearch);
    };

    return(
        <div className="row m-0 p-0 justify-content-center">
            <div className="col-md-8  justify-content-center">
            {mySearch.length==0?(<div className="container  d-flex justify-content-center align-items-center" style={{height:'400px'}}> 
                                                <div className="spinner-border my-5" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>):(mySearch && mySearch.map((item,index) => (
                                                        <Searchcard key={index} mySearch={item} deleteSearch={deleteSearch}/>
                                                    )))}
                
            </div>
        </div>
    );
}