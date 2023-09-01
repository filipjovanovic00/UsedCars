import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/style.css'

export default function Registrationpage(){
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const history = useNavigate();

  const whereJump=()=>{
        history('/login');
  };

  const handleSubmit =  () => {
    if (validateForm()){
        try {
        const response =  axios.post('https://localhost:5001/api/User/register', {firstName, lastName,email,password,phone});
        whereJump();
        } catch (error) {
        alert("Nije moguca registracija!")
        }
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    const errors = {};

    if (!lastName) {
      formIsValid = false;
      errors.username = 'Morate uneti prezime';
    }

    if (!firstName) {
      formIsValid = false;
      errors.username = 'Morate uneti ime';
    }

    
    if (!email) {
      formIsValid = false;
      errors.email = 'Morate uneti email';
    }

    if (!password) {
      formIsValid = false;
      errors.password = 'Morate uneti lozinku';
    }

    if (!confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = 'Morate potvrditi lozinku';
    }

    if (password !== confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = 'Lozinke se ne poklapaju';
    }

    if (!phone) {
        formIsValid = false;
        errors.phone = 'Morate uneti nesto o sebi';
    }

    

    setErrors(errors);
    return formIsValid;
  };


  return (
    <div className="container">
      <div className="row justify-content-center text-center my-5">
        <div className="col-md-5 text-break p-3" style={{border:'solid',borderColor:'white',borderRadius:'30px',background: 'linear-gradient(to right, #097969, #212122)'}}>
          <h2 className='p-3' style={{color:'white'}}>Molimo vas popunite sva polja</h2>
          <form >
            <div className="form-group my-1">
                <label htmlFor="firstName" style={{color:'white'}}>Ime</label>
                <input
                    type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    id="firstName"
                    placeholder="Unesi ime..."
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
            <div className="form-group my-1">
                <label htmlFor="lastName" style={{color:'white'}}>Prezime</label>
                <input
                    type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    id="lastName"
                    placeholder="Unesi prazime..."
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
            <div className="form-group my-1">
                <label htmlFor="email" style={{color:'white'}}>Email</label>
                <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="Unesi email..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group my-1">
                <label htmlFor="password" style={{color:'white'}}>Lozinka</label>
                <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    placeholder="Unesi lozinku..."
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="form-group my-1">
                <label htmlFor="cpassword" style={{color:'white'}}>Lozinka</label>
                <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    id="cpassword"
                    placeholder="Potvrdi lozinku..."
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>
            <div className="form-group my-1">
              <label htmlFor="phone" style={{color:'white'}}>Telefon</label>
              <input
                type='text'
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                id="phone"
                placeholder="Kontakt telefon..."
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <button onClick={handleSubmit} type="button" className="btn btn-primary my-1 custom-btn-search">
                Potvrdi!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

