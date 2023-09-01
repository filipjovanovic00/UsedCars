import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function Headeradmin(){

    const logoutUser=() =>{
        delete axios.defaults.headers.common["Authorization"];
        localStorage.setItem('token', "");
        localStorage.setItem('email', "");
        localStorage.setItem('id', "");
        localStorage.setItem('firstName', "");
        localStorage.setItem('lastName', "");
        localStorage.setItem('role', "");
        localStorage.setItem('isloged', 'no');
    }

    return(
        <header className=" mb-2">
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container-flex" style={{width:'100%'}}>
                    <div className="row p-0 align-items-center justify-content-between" style={{backgroundColor:'#212122'}}>
                        <div className="col-md-3 my-3 mx-4 mr-0">
                            <Link type="button" to="/admin" style={{textDecoration:"none"}}><b className="" style={{color:"white",fontSize:"30px"}}>Polovni automobili</b></Link>
                        </div>
                        <div className="col-md-8 justify-content-end mx-3">
                            <div className="d-flex justify-content-end">
                            <Link className="btn btn-primary mx-1" type="button" to="profile" style={{backgroundColor:"#212122",border:"none"}}
                                    onMouseOver={(e) => e.target.style.color = "#C1E1C1"}
                                    onMouseOut={(e) => e.target.style.color = "white"}>
                                    <span className="" style={{color:"white",fontSize:"30px"}}>Moj profil</span></Link>
                                <Link className="btn btn-primary mx-1" type="button" to="addAd" style={{backgroundColor:"#212122",border:"none"}}
                                    onMouseOver={(e) => e.target.style.color = "#C1E1C1"}
                                    onMouseOut={(e) => e.target.style.color = "white"}>
                                    <span className="" style={{color:"white",fontSize:"30px"}}>Dodaj oglas</span></Link>
                                <Link className="btn btn-primary mx-1" type="button" to="aproveAdds" style={{backgroundColor:"#212122",border:"none"}}
                                    onMouseOver={(e) => e.target.style.color = "#C1E1C1"}
                                    onMouseOut={(e) => e.target.style.color = "white"}>
                                    <span className="" style={{color:"white",fontSize:"30px"}}>Oglasi na cekanju</span></Link>
                                <Link className="btn btn-primary mx-1" type="button" to="/" style={{backgroundColor:"#097969",border:"none"}}
                                    onMouseOver={(e) => e.target.style.color = "#C1E1C1"}
                                    onMouseOut={(e) => e.target.style.color = "white"}>
                                    <span className="" style={{color:"white",fontSize:"30px"}} onClick={logoutUser} to="/">Odjavi se</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}