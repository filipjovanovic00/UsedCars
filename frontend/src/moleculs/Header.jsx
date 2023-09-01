import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className=" mb-2">
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container-flex" style={{width:'100%'}}>
                    <div className="row p-0 align-items-center justify-content-between" style={{backgroundColor:'#212122'}}>
                        <div className="col-md-3 my-3 mx-4 mr-0">
                            <Link type="button" to="/" style={{textDecoration:"none"}}><b className="" style={{color:"white",fontSize:"30px"}}>Polovni automobili</b></Link>
                        </div>
                        <div className="col-md-4 justify-content-end mx-3">
                            <div className="d-flex justify-content-end">
                                <Link className="btn btn-primary mx-1" type="button" to="/login" style={{backgroundColor:"#212122",border:"none"}}
                                    onMouseOver={(e) => e.target.style.color = "#C1E1C1"}
                                    onMouseOut={(e) => e.target.style.color = "white"}>
                                    <span className="" style={{color:"white",fontSize:"30px"}}>Prijavi se</span></Link>
                                <Link className="btn btn-primary mx-1" type="button" to="/registration" style={{backgroundColor:"#097969",border:"none"}}
                                    onMouseOver={(e) => e.target.style.color = "#C1E1C1"}
                                    onMouseOut={(e) => e.target.style.color = "white"}>
                                    <span className="" style={{color:"white",fontSize:"30px"}}>Registruj se</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}