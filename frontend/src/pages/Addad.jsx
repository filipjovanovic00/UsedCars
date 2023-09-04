import React, { useState } from "react";
import { optionsMark,optionsDrive,optionsGear,optionsKm,optionsType,optionsState } from "../helpers/Dropdowndata";
import Select from 'react-select';
import { Link } from "react-router-dom";
import '../style/style.css'
import axios from "axios";

export default function Addad(){

    const [error,setError]=useState("");
    const [mark,setMark]=useState("");
    const [model,setModel]=useState("");
    const [carBody,setCarBody]=useState("");
    const [year,setYear]=useState(null);
    const [mileage,setMileage]=useState(null);
    const [price,setPrice]=useState(null);
    const [driveType,setDriveType]=useState("");
    const [gearboxType,setGearboxType]=useState("");
    const [description,setDescription]=useState("");
    const [location,setLocation]=useState("");
    const [pictures, setPictures] = useState({
            picture1:null,
            picture2:null,
            picture3:null,
            picture4:null,
            picture5:null,
            picture6:null
            });
    const [stateOfCar,setStateOfCar]=useState("");

    const currentYear = new Date().getFullYear();
    const carAgeOptions = Array.from({ length: currentYear - 1949 }, (_, index) => ({
        value: `${currentYear - index}`,
        label: `${currentYear - index}`,
    }));

    const checkAll = () => {
        
        if (
            !(
                (mark && mark.value) &&
                model &&
                (year && year.value) &&
                parseInt(mileage) &&
                parseInt(price) &&
                (stateOfCar && stateOfCar.value) &&
                (carBody && carBody.value) &&
                (driveType && driveType.value) &&
                (gearboxType && gearboxType.value) &&
                description &&
                location
            )
        ) {
            return false;
        }
        return true
    };

    const addAd=async(e)=>{
        
        if (checkAll()){
            try {
                const response = await axios.post('https://localhost:5001/api/Car/addcar',
                {
                    mark: mark ? mark.value : "",
                    model,
                    year: parseInt(year.value),
                    mileage: parseInt(mileage),
                    price: parseInt(price),
                    carBody: carBody ? carBody.value : "",
                    stateOfCar: stateOfCar ? stateOfCar.value : "",
                    driveType: driveType ? driveType.value : "",
                    gearboxType:gearboxType?gearboxType.value:"",
                    description,
                    location,
                    pictures
                });
                alert("Oglas je uspesno dodat!");
                setError("");
            } catch (error) {
                alert("Oglas nije moguce dodati");
                alert(error)
            }
        }else{
            setError("Molimo popunite sva polja. Hvala.");
        }
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    };

    const updatePiture1=(item)=>{
        setPictures({
            ...pictures,
            picture1: item, 
          });
    }

    const updatePiture2=(item)=>{
        setPictures({
            ...pictures,
            picture2: item, 
          });
    }

    const updatePiture3=(item)=>{
        setPictures({
            ...pictures,
            picture3: item, 
          });
    }

    const updatePiture4=(item)=>{
        setPictures({
            ...pictures,
            picture4: item, 
          });
    }

    const updatePiture5=(item)=>{
        setPictures({
            ...pictures,
            picture5: item, 
          });
    }

    const updatePiture6=(item)=>{
        setPictures({
            ...pictures,
            picture6: item, 
          });
    }

    const handleMark = (selectedOption) => {
        setMark(selectedOption);
    };

    const handleState = (selectedOption) => {
        setStateOfCar(selectedOption);
    };

    const handleModel = (e) => {
        setModel(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    const handleCarBody = (selectedOption) => {
        setCarBody(selectedOption);
    };

    const handleAge = (selectedOption) => {
        setYear(selectedOption);
    };

    const handleMileage = (e) => {
        setMileage(e.target.value);
    };

    const handleGear = (selectedOption) => {
        setGearboxType(selectedOption);
    };

    const handleDrive = (selectedOption) => {
        setDriveType(selectedOption);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleFile1Upload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        updatePiture1(base64.slice(22));
    };

    const handleFile2Upload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        updatePiture2(base64.slice(22))
    };

    const handleFile3Upload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        updatePiture3(base64.slice(22))
    };

    const handleFile4Upload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        updatePiture4(base64.slice(22))
    };

    const handleFile5Upload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        updatePiture5(base64.slice(22))
    };

    const handleFile6Upload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        console.log(base64);
        updatePiture6(base64.slice(22))
    };

    const deleteImage = (imageKey) => {
        setPictures((previousData) => ({
          ...previousData,
          [imageKey]: null,
        }));
      };

    return(
        <div className="container">
            <div className="row justify-content-center text-center m-5">
                <h3>Formular za postavku oglasa</h3>
            </div>
            <div className="row " style={{backgroundColor:'lightgray'}}>
                <div className="col-md-12 m-1">
                    <h6 className="m-1"><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> Unos novog vozila kategorije <b>Automobil</b></h6>
                </div>
            </div>
            <div className="row my-5">
                <div className="row">
                    <h4 className="m-1"><i className="fa-solid fa-arrow-right" style={{color: '#000205'}}></i> Formular</h4>
                </div>
                <div className="row m-0 p-0" style={{backgroundColor:'lightgray',borderRadius:'10px'}}>
                    <div className="row m-0 p-0 ">
                        <h5><small>Sva polja su obavena <span style={{color:'red'}}>*</span></small></h5>
                        {error!==""?<h5><small> <span style={{color:'red'}}>*</span></small></h5>:null}
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
                                    value={carBody}
                                    onChange={handleCarBody}
                                    isClearable
                                    isSearchable
                                    required
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
                                    name="mileage"
                                    value={mileage}
                                    onChange={handleMileage} 
                                    style={{flex:'1'}}
                                    required>
                                </input>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Select
                                options={optionsGear}
                                value={gearboxType}
                                onChange={handleGear}
                                isClearable
                                isSearchable
                                placeholder="Menjac"
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
                            <Select
                                options={optionsDrive}
                                value={driveType}
                                onChange={handleDrive}
                                isClearable
                                isSearchable
                                placeholder="Tip pogona"
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
                                value={year}
                                onChange={handleAge}
                                isClearable
                                isSearchable
                                placeholder="Godiste"
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
                                    placeholder="Lokacija (grad ili opstina)"  
                                    name="location"
                                    value={location}
                                    onChange={handleLocation} 
                                    style={{flex:'1'}}
                                    required>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center p-3 my-1">
                        <div className="col-md-5">
                            <div className="custom-input-wrapper" style={{display:'flex'}}>
                            <textarea
                                value={description}
                                name="description"
                                placeholder="Opis automobila..."
                                onChange={handleDescription}
                                rows={5}
                                cols={10}
                                style={{
                                    flex: '1',
                                    border: '1px solid #ced4da',
                                    padding: '8px',
                                    color: '#000',
                                    transition: 'border-color 0.2s, box-shadow 0.2s',
                                }}
                                required
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#80bdff';
                                    e.target.style.boxShadow = '0 0 0 0.2rem rgba(0, 123, 255, 0.25)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#ced4da';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center p-0 my-1">
                        <div className="col-md-4">
                        <Select
                                options={optionsState}
                                value={stateOfCar}
                                onChange={handleState}
                                isClearable
                                isSearchable
                                placeholder="Stanje automobila"
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
                    <div className="row justify-content-center p-0 my-1">
                        <div className="col-md-4">
                            <div className="image-upload-container">
                                <label className="btn btn-success custom-btn image-upload-label my-3">
                                    Unesi sliku <i className="fa-solid fa-image" style={{color: '#140000'}}></i>
                                    <input
                                    type="file"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={(e) => handleFile1Upload(e)}
                                    className="image-upload-input"
                                    />
                                </label>
                                <div className="image-preview-container">
                                    {pictures.picture1?<div>
                                                                    <img
                                                                        src={("data:image/jpeg;base64,"+pictures.picture1)}
                                                                        alt={`Selected picture1`}
                                                                        className="image-preview"
                                                                    />
                                                                    <button className="btn btn-danger btn-sm delete-image-button mx-2"
                                                                        onClick={() => deleteImage('picture1')}
                                                                        >
                                                                        <i className="fa-solid fa-trash"></i>
                                                                    </button>
                                                                    </div>:<span></span>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-upload-container">
                                <label className="btn btn-success custom-btn image-upload-label my-3">
                                    Unesi sliku <i className="fa-solid fa-image" style={{color: '#140000'}}></i>
                                    <input
                                    type="file"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={(e) => handleFile2Upload(e)}
                                    className="image-upload-input"
                                    />
                                </label>
                                <div className="image-preview-container">
                                    {pictures.picture2?<div><img
                                                                src={("data:image/jpeg;base64,"+pictures.picture2)}
                                                                alt={`Selected picture2`}
                                                                className="image-preview"
                                                            /><button className="btn btn-danger btn-sm delete-image-button mx-2"
                                                            onClick={() => deleteImage('picture2')}
                                                            >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button></div>:<span></span>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-upload-container">
                                <label className="btn btn-success custom-btn image-upload-label my-3">
                                    Unesi sliku <i className="fa-solid fa-image" style={{color: '#140000'}}></i>
                                    <input
                                    type="file"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={(e) => handleFile3Upload(e)}
                                    className="image-upload-input"
                                    />
                                </label>
                                <div className="image-preview-container">
                                    {pictures.picture3?<div><img
                                                                src={("data:image/jpeg;base64,"+pictures.picture3)}
                                                                alt={`Selected picture`}
                                                                className="image-preview"
                                                            /><button className="btn btn-danger btn-sm delete-image-button mx-2"
                                                            onClick={() => deleteImage('picture3')}
                                                            >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button></div>:<span></span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center p-0 my-1">
                        <div className="col-md-4">
                            <div className="image-upload-container">
                                <label className="btn btn-success custom-btn image-upload-label my-3">
                                    Unesi sliku <i className="fa-solid fa-image" style={{color: '#140000'}}></i>
                                    <input
                                    type="file"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={(e) => handleFile4Upload(e)}
                                    className="image-upload-input"
                                    />
                                </label>
                                <div className="image-preview-container">
                                    {pictures.picture4?<div><img
                                                                src={("data:image/jpeg;base64,"+pictures.picture4)}
                                                                alt={`Selected picture4`}
                                                                className="image-preview"
                                                            /><button className="btn btn-danger btn-sm delete-image-button mx-2"
                                                            onClick={() => deleteImage('picture3')}
                                                            >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button></div>:<span></span>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-upload-container">
                                <label className="btn btn-success custom-btn image-upload-label my-3">
                                    Unesi sliku <i className="fa-solid fa-image" style={{color: '#140000'}}></i>
                                    <input
                                    type="file"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={(e) => handleFile5Upload(e)}
                                    className="image-upload-input"
                                    />
                                </label>
                                <div className="image-preview-container">
                                    {pictures.picture5?<div><img
                                                                src={("data:image/jpeg;base64,"+pictures.picture5)}
                                                                alt={`Selected picture5`}
                                                                className="image-preview"
                                                            /><button className="btn btn-danger btn-sm delete-image-button mx-2"
                                                            onClick={() => deleteImage('picture5')}
                                                            >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button></div>:<span></span>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-upload-container">
                                <label className="btn btn-success custom-btn image-upload-label my-3">
                                    Unesi sliku <i className="fa-solid fa-image" style={{color: '#140000'}}></i>
                                    <input
                                    type="file"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={(e) => handleFile6Upload(e)}
                                    className="image-upload-input"
                                    />
                                </label>
                                <div className="image-preview-container">
                                    {pictures.picture6?<div><img
                                                                src={("data:image/jpeg;base64,"+pictures.picture6)}
                                                                alt={`Selected picture6`}
                                                                className="image-preview"
                                                            /><button className="btn btn-danger btn-sm delete-image-button mx-2"
                                                            onClick={() => deleteImage('picture6')}
                                                            >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button></div>:<span></span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center p-0 my-3">
                        <div className="col-md-2">
                            <button type="button" className="btn btn-primary custom-btn-search w-100" onClick={addAd}>Dodaj!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}