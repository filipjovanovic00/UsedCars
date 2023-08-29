import React, { useState } from "react";
import { optionsMark,optionsDrive,optionsGear,optionsKm,optionsType } from "../helpers/Dropdowndata";
import Select from 'react-select';
import { Link } from "react-router-dom";
import Locationinput from "../atoms/Locationinput";

export default function Addad(){

    const [mark,setMark]=useState("");
    const [model,setModel]=useState("");
    const [type,setType]=useState("");
    const [yearOfManifac,setYearOfManifac]=useState(null);
    const [km,setKm]=useState("");
    const [price,setPrice]=useState("");
    const [driveType,setDriveType]=useState("");
    const [gearBox,setGearBox]=useState("");

    const currentYear = new Date().getFullYear();
    const carAgeOptions = Array.from({ length: currentYear - 1949 }, (_, index) => ({
        value: `${currentYear - index}`,
        label: `${currentYear - index}`,
    }));

    const handleMark = (selectedOption) => {
        setMark(selectedOption);
    };

    const handleModel = (selectedOption) => {
        setModel(selectedOption);
    };

    const handleType = (selectedOption) => {
        setType(selectedOption);
    };

    const handleAge = (selectedOption) => {
        setYearOfManifac(selectedOption);
    };

    const handleKm = (selectedOption) => {
        setKm(selectedOption);
    };

    const handleGear = (selectedOption) => {
        setGearBox(selectedOption);
    };

    const handleDrive = (selectedOption) => {
        setDriveType(selectedOption);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    /*const addAd=async(e)=>{
        try {
            const response = await axios.post('http://localhost:8080/cars/search?id=2');
            props.setCars(response.data.content);
            props.setAfterSearch("yes");
        } catch (error) {
            setErrorSearch(error);
        }
    }*/

    return(
        <div className="container">
            <div className="row justify-content-center text-center m-5">
                <h3>Formular za postavku oglasa</h3>
            </div>
            <div className="row" style={{backgroundColor:'lightgray'}}>
                <div className="col-md-12 m-1">
                    <h6 className="m-1"><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> Unos novog vozila kategorije <b>Automobil</b></h6>
                </div>
            </div>
            <div className="row mt-5">
                <div className="row">
                    <h4 className="m-1"><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> Formular</h4>
                </div>
                <div className="row m-0 p-0" style={{backgroundColor:'lightgray',borderRadius:'10px'}}>
                    <div className="row m-0 p-0 ">
                        <h5><small>Sva polja su obavena <span style={{color:'red'}}>*</span></small></h5>
                    </div>
                    <div className="row justify-content-center p-3 my-1">
                        <div className="col-md-3">
                            <Select options={optionsMark}
                                    value={mark}
                                    onChange={handleMark}
                                    isClearable
                                    isSearchable
                                    placeholder="Marka"
                                    required
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            borderRadius: '4px',
                                            borderColor: state.isFocused ? '#80bdff' : '#ced4da',
                                            boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : null,
                                            '&:hover': {
                                            borderColor: state.isFocused ? '#80bdff' : '#adb5bd',
                                            },
                                        }),
                                        singleValue: (provided) => ({
                                            ...provided,
                                            color: '#000',
                                        }),
                                        }}
                                />
                        </div>
                        <div className="col-md-3">
                            <div className="custom-input-wrapper" style={{display:'flex'}}>
                                <input 
                                    type="text" 
                                    placeholder="Model"  
                                    name="model"
                                    value={model}
                                    onChange={handleModel} 
                                    style={{flex:'1'}}
                                    required>
                                </input>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Select options={optionsType}
                                    isMulti
                                    value={type}
                                    onChange={handleType}
                                    isClearable
                                    isSearchable
                                    className="basic-multi-select"
                                    placeholder="Tip automobila"
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            borderRadius: '4px',
                                            borderColor: state.isFocused ? '#80bdff' : '#ced4da',
                                            boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : null,
                                            '&:hover': {
                                            borderColor: state.isFocused ? '#80bdff' : '#adb5bd',
                                            },
                                        }),
                                        singleValue: (provided) => ({
                                            ...provided,
                                            color: '#000',
                                        }),
                                        }}
                                />
                        </div>
                    </div>
                    <div className="row justify-content-center p-3 my-1">
                        <div className="col-md-3">
                            <div className="custom-input-wrapper" style={{display:'flex'}}>
                                <input 
                                    type="number" 
                                    placeholder="Kilometraza"  
                                    name="km"
                                    value={km}
                                    onChange={handleKm} 
                                    style={{flex:'1'}}
                                    required>
                                </input>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Select
                                options={optionsGear}
                                value={gearBox}
                                onChange={handleGear}
                                isClearable
                                isSearchable
                                placeholder="Menjac"
                                styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    borderRadius: '4px',
                                    borderColor: state.isFocused ? '#80bdff' : '#ced4da',
                                    boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : null,
                                    '&:hover': {
                                    borderColor: state.isFocused ? '#80bdff' : '#adb5bd',
                                    },
                                }),
                                singleValue: (provided) => ({
                                    ...provided,
                                    color: '#000',
                                }),
                                }}
                            />
                        </div>
                        <div className="col-md-3">
                            <Select
                                options={optionsDrive}
                                value={driveType}
                                onChange={handleDrive}
                                isClearable
                                isSearchable
                                placeholder="Tip pogona"
                                styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    borderRadius: '4px',
                                    borderColor: state.isFocused ? '#80bdff' : '#ced4da',
                                    boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : null,
                                    '&:hover': {
                                    borderColor: state.isFocused ? '#80bdff' : '#adb5bd',
                                    },
                                }),
                                singleValue: (provided) => ({
                                    ...provided,
                                    color: '#000',
                                }),
                                }}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center p-3 my-1">
                        <div className="col-md-3">
                            <div className="custom-input-wrapper" style={{display:'flex'}}>
                                <input 
                                    type="number" 
                                    placeholder="Cena"  
                                    name="price"
                                    value={price}
                                    onChange={handlePrice} 
                                    style={{flex:'1'}}
                                    required>
                                </input>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Select
                                options={carAgeOptions}
                                value={yearOfManifac}
                                onChange={handleAge}
                                isClearable
                                isSearchable
                                placeholder="Godiste"
                                styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    borderRadius: '4px',
                                    borderColor: state.isFocused ? '#80bdff' : '#ced4da',
                                    boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : null,
                                    '&:hover': {
                                    borderColor: state.isFocused ? '#80bdff' : '#adb5bd',
                                    },
                                }),
                                singleValue: (provided) => ({
                                    ...provided,
                                    color: '#000',
                                }),
                                }}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center p-3 my-1">
                        <Locationinput />
                    </div>
                </div>
            </div>
        </div>
    )
}