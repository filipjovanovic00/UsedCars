import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import '../style/style.css';
import { optionsMark,optionsDrive,optionsGear,optionsKm,optionsType } from "../helpers/Dropdowndata";
import axios from "axios";


export default function Searchbar(props){

    const [mark,setMark]=useState("");
    const [type,setType]=useState("");
    const [yearEnd,setYearEnd]=useState(null);
    const [yearStart,setYearStart]=useState(null);
    const [km,setKm]=useState("");
    const [price,setPrice]=useState("");
    const [drive,setDrive]=useState("");
    const [gear,setGear]=useState("");
    const [activeTab, setActiveTab] = useState("cars");
    const history = useNavigate();
    const [errorSearch,setErrorSearch]=useState("");
    const [searchToast,setSearchToast]=useState("no");
    const [saveSearchText,setSaveSearchText]=useState("no text");

    const currentYear = new Date().getFullYear();
    const carAgeOptions = Array.from({ length: currentYear - 1949 }, (_, index) => ({
        value: `${currentYear - index}`,
        label: `${currentYear - index}`,
    }));

    const tabCars = () => {
        setActiveTab("cars");
    };

    const handleMark = (selectedOption) => {
        if (selectedOption.length <= 3) {
            setMark(selectedOption);
        }else{
            alert("Moguce je odabrati tri opcije");
        }
    };

    const handleType = (selectedOption) => {
        if (selectedOption.length <= 3) {
            setType(selectedOption);
        }else{
            alert("Moguce je odabrati tri opcije");
        }
    };

    const handleAgeEnd = (selectedOption) => {
        if(yearStart===null){
            setYearEnd(selectedOption);
        }else if(selectedOption!==null) { 
                if(parseInt(selectedOption.value) > parseInt(yearStart.value)){
                    setYearEnd(selectedOption);
                }else{
                    alert("Godina do godista je manja od godine od godista!");
                }
        }else if (selectedOption===null){
            setYearEnd(selectedOption);
        } 
    };

    const handleAgeStart = (selectedOption) => {
        if(yearEnd===null){
            setYearStart(selectedOption);
        }else if(selectedOption!==null) { 
                if(parseInt(selectedOption.value) < parseInt(yearEnd.value)){
                    setYearStart(selectedOption);
                }else{
                    alert("Godina od godista je vece od godine do godista!");
                }
        }else if (selectedOption===null){
            setYearStart(selectedOption);
        } 
    };

    const handleKm = (selectedOption) => {
        setKm(selectedOption);
    };

    const handleGear = (selectedOption) => {
        setGear(selectedOption);
    };

    const handleDrive = (selectedOption) => {
        setDrive(selectedOption);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const startSave=()=>{
        setSearchToast("yes");
    }

    const endSave=()=>{
        setSearchToast("no");
        setSaveSearchText("no text");
    }

    const searchIt=async(e)=>{
        try {
            var x = `http://localhost:8080/arrangements/get?`+
            (mark?"mark="+mark+"&":"") +
            (type?"type="+type+"&":"") +
            (yearStart?"yearStart="+yearStart+"&":"") +
            (yearEnd?"yearEnd="+yearEnd+"&":"") +
            (gear?"gear="+gear+"&":"") +
            (drive?"drive="+drive+"&":"") +
            (price?"price="+price+"&":"") +
            (km?"km="+km:"");
            const response = await axios.get('http://localhost:8080/cars/search?id=2');
            props.setCars(response.data);
            props.loadedCars("yes");
        } catch (error) {
            setErrorSearch(error);
        }
    }

    const saveSearch=async(e)=>{
        try {
            const response = await axios.post('http://localhost:8080/cars/search?id=2');
            setSaveSearchText("Pretraga je uspesno sacuvana");
        } catch (error) {
            alert("Trenutno nije moguce sacuvati pretragu. Molimo vas pokusajte kasnije. Hvala!");
        }
    }

    return(
        <>
        {searchToast==="yes"?<div className="row save-search">
                                <div className="toast-body text-center">
                                    {saveSearchText==="no text"?<p className="text-break">Da li ste sigurni da zelite da sacuvate trenutnu pretragu?</p>:<p className="text-break" style={{color:"green"}}>{saveSearchText}</p>}
                                    <div className="mt-2 pt-2 border-top">
                                        <button type="button" className="btn search-button mx-1" onClick={saveSearch}>Sacuvaj!</button>
                                        <button type="button" className="btn btn-secondary mx-1" onClick={endSave}><i className="fa-solid fa-xmark" style={{color: '#000000'}}></i></button>
                                     </div>
                                </div>
                            </div>
                            :<span></span>}
        <div className="container p-0 mb-5" style={{backgroundColor:"black",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
            <div className="row m-0 p-0">
                <ul className="nav nav-tabs">
                    <li className="nav-item tab-hover">
                        <button className={activeTab === "tab1" ? "nav-link active" : "nav-link "} onClick={tabCars} style={{textDecoration:"none",height:"100%",border:"none",borderRadius:'0px',backgroundColor: activeTab === "cars" ? "#097969" : "transparent"}}><span style={{color:"white",fontSize:"20px"}}><b>Automobili</b></span></button>
                    </li>
                </ul>
            </div>
            <div className="row m-0 p-0" style={{backgroundColor:'#5968B8'}}>
                <div className="row justify-content-center p-3 my-1">
                    <div className="col-md-3">
                        <Select options={optionsMark}
                                isMulti
                                value={mark}
                                onChange={handleMark}
                                isClearable
                                isSearchable
                                className="basic-multi-select"
                                placeholder="Marka"
                            />
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
                            />
                    </div>
                    <div className="col-md-3">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <Select
                                    options={carAgeOptions}
                                    value={yearStart}
                                    onChange={handleAgeStart}
                                    isClearable
                                    isSearchable
                                    placeholder="Godiste od"
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
                            <div className="col-md-6">
                                <Select
                                    options={carAgeOptions}
                                    value={yearEnd}
                                    onChange={handleAgeEnd}
                                    isClearable
                                    isSearchable
                                    placeholder="do"
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
                    </div>
                </div>
                <div className="row justify-content-center p-3 my-1">
                    <div className="col-md-3">
                        <div className="custom-input-wrapper" style={{display:'flex'}}>
                            <input 
                                type="number" 
                                placeholder="Kilometraza do"  
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
                            value={gear}
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
                            value={drive}
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
                                placeholder="Cena do"  
                                name="price"
                                value={price}
                                onChange={handlePrice} 
                                style={{flex:'1'}}
                                required>
                            </input>
                        </div>
                    </div>
                </div>
                <div className="row  pb-3 my-1 ">
                    <div className="col-md-4 offset-md-4 d-flex justify-content-center">
                        <button className="btn btn-success w-75 search-button" onClick={searchIt}><p className="m-0 p-0" style={{color:'white'}}>Pretrazi</p></button>
                    </div>
                    <div className="col-md-4">
                            <div className="row justify-content-around">
                                <button className="btn btn-success w-50 search-button" onClick={startSave}><p className="m-0 p-0" style={{color:'white'}}>Sacuvaj pretragu!</p></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};