import { useState } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../style/style.css'
import { setToken } from "../auth/Settoken";

export default function Loginpage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useNavigate();

    const whereJump=()=>{
        if(localStorage.getItem('role')==="1"){
            history('/admin');
        }else{
            history('/user');
        }
    };

    const handleSubmit = async () => {
        try {
          const response = await axios.post('https://localhost:5001/api/User/login', {
            email,
            password,
          });
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('id', response.data.id);
          localStorage.setItem('firstName', response.data.firstName);
          localStorage.setItem('lastName', response.data.lastName);
          localStorage.setItem('role', response.data.role);
          localStorage.setItem('isloged', 'yes');
          setToken(response.data.token);
          whereJump();
        } catch (error) {
          alert("Imamo problema sa konektovenjem sa bazom. Molimo pokusajte kasnije.Hvala!")
        }
      };

    return(
        <div className="container">
            <div className="row justify-content-center text-center my-5">
                    <div className="col-md-5 text-break" style={{border:'solid',borderColor:'white',borderRadius:'30px',background: 'linear-gradient(to right, #097969, #212122)'}}>
                        <div className="login justify-content-center p-2">
                            <div className="row justify-content-center">
                            <h2 className="text-center" style={{color:'white'}}>Prijavi se!</h2>
                            <div >
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email" style={{color:'white'}}>Email adresa</label>
                                    <input className="form-control" 
                                        type="text" 
                                        id="email"    
                                        placeholder="Unesite korisnicko ime!" 
                                        name="email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        required></input>
                                    <div className="invalid-feedback">
                                        Unesite Vašu e-mail adresu.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="password" style={{color:'white'}}>Lozinka</label>
                                    <input className="form-control" 
                                        type="password" 
                                        id="password" 
                                        placeholder="Unesite lozinku!"
                                        name="password"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        required></input>
                                    <div className="invalid-feedback">
                                        Unesite Vašu lozinku .
                                    </div>
                                </div>
                                <button className="btn btn-primary  my-4 custom-btn-search" type="button" onClick={handleSubmit}>PRIJAVI SE!</button>
                            </div>
                            </div>
                            <div className="row my-2 ">
                                <div className="col-md-12">
                                    <p className="text-center text-break ">{error && <span className="error" style={{color:"red"}}>Pogrešno korisničko ime ili lozinka</span>}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};