import React, { useState } from "react";
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import '../style/style.css'
import { optionsMark,optionsDrive,optionsGear,optionsKm,optionsType } from "../helpers/Dropdowndata";
import axios from "axios";


export default function Searchbar(props){

    const [mark,setMark]=useState("");
    const [type,setType]=useState("");
    const [yearOfManifacEnd,setYearOfManifacEnd]=useState(null);
    const [yearOfManifacStart,setYearOfManifacStart]=useState(null);
    const [km,setKm]=useState("");
    const [price,setPrice]=useState("");
    const [driveType,setDriveType]=useState("");
    const [gearBox,setGearBox]=useState("");
    const [activeTab, setActiveTab] = useState("cars");
    const history = useNavigate();
    const [errorSearch,setErrorSearch]=useState("");

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
        if(yearOfManifacStart===null){
            setYearOfManifacEnd(selectedOption);
        }else if(selectedOption!==null) { 
                if(parseInt(selectedOption.value) > parseInt(yearOfManifacStart.value)){
                    setYearOfManifacEnd(selectedOption);
                }else{
                    alert("Godina do godista je manja od godine od godista!");
                }
        }else if (selectedOption===null){
            setYearOfManifacEnd(selectedOption);
        } 
    };

    const handleAgeStart = (selectedOption) => {
        if(yearOfManifacEnd===null){
            setYearOfManifacStart(selectedOption);
        }else if(selectedOption!==null) { 
                if(parseInt(selectedOption.value) < parseInt(yearOfManifacEnd.value)){
                    setYearOfManifacStart(selectedOption);
                }else{
                    alert("Godina od godista je vece od godine do godista!");
                }
        }else if (selectedOption===null){
            setYearOfManifacStart(selectedOption);
        } 
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

    const searchIt=async(e)=>{
        try {
            /*var x = `http://localhost:8080/arrangements/get?`+
            (search.name?"name="+search.name+"&":"") +
            (search.city?"city="+search.city+"&":"") +
            (search.country?"country="+search.country+"&":"") +
            (search.continent?"continent="+search.continent+"&":"") +
            (search.transportation?"transportation="+search.transportation+"&":"") +
            (search.startdate?"startDate="+search.startdate+"&":"") +
            (search.enddate?"endDate="+search.enddate+"&":"") +
            `page=${page}&size=${size}`;*/
            const response = await axios.get('http://localhost:8080/cars/search?id=2');
            props.setCars(response.data.content);
            props.setAfterSearch("yes");
        } catch (error) {
            setErrorSearch(error);
        }
    }


    return(
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
                                    value={yearOfManifacStart}
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
                                    value={yearOfManifacEnd}
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
                        <Select
                            options={optionsKm}
                            value={km}
                            onChange={handleKm}
                            isClearable
                            isSearchable
                            placeholder="Predjena kilometraza"
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
                <div className="row justify-content-center pb-3 my-1">
                    <div className="col-md-4 d-flex justify-content-center">
                        <Link className="btn btn-success w-75 search-button" onClick={searchIt}><p className="m-0 p-0" style={{color:'white'}}>Pretrazi</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};