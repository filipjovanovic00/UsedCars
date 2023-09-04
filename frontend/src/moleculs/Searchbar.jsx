import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import '../style/style.css';
import { optionsMark,optionsDrive,optionsGear,optionsKm,optionsType,optionsState } from "../helpers/Dropdowndata";
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
    const [decodedToken,setDecodedToken]=useState('')
    const [showModal, setShowModal] = useState(false);
    const [searchShow,setSearchShow]=useState('');
    const [search,setSearch]=useState("")
    const [searchParam,setSearchParam]=useState('');
    const userId=localStorage.getItem("id");
    const [state,setState]=useState("");

    const openModal = () => {
        const x =(mark?"'"+mark.value+"', ":"") +
        (type?"'"+type.value+"' ,":"") +
        (yearStart!==null?"'od "+yearStart.value+" god.' ,":"") +
        (yearEnd!==null?"'do "+yearEnd.value+" god.' ,":"") +
        (gear?"'"+gear.value+"' ,":"") +
        (drive?"'"+drive.value+"' ,":"") +
        (state?"'"+state.value+" ' ,":"") +
        (price?"'"+price+" €' ,":"") +
        (km?"'"+km+" km' ,":"");
        const y=((mark?"mark="+mark.value+"&":"") +
        (type?"type="+type.value+"&":"") +
        (yearStart!==null?"yearStart="+yearStart.value+"&":"") +
        (yearEnd!==null?"yearEnd="+yearEnd.value+"&":"") +
        (gear?"gear="+gear.value+"&":"") +
        (drive?"drive="+drive.value+"&":"") +
        (state?"state="+state.value+"&":"") +
        (price?"price="+price+"&":"") +
        (km?"km="+km:""));
        setSearchShow(x);
        setSearch(y);
        setSearchParam(y);
        setShowModal(true);
    };
    
      const closeModal = () => {
        setShowModal(false);
    };
    

    const currentYear = new Date().getFullYear();
    const carAgeOptions = Array.from({ length: currentYear - 1949 }, (_, index) => ({
        value: `${currentYear - index}`,
        label: `${currentYear - index}`,
    }));

    const tabCars = () => {
        setActiveTab("cars");
    };

    const handleMark = (selectedOption) => {
        setMark(selectedOption);
    };

    const handleState = (selectedOption) => {
        setState(selectedOption);
    };

    const handleType = (selectedOption) => {
        setType(selectedOption);
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

    const handleKm = (e) => {
        setKm(e.target.value);
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

   /* const decodeJwt=()=>{

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImNmZWIwZTVlLTVkMDktNDY0YS04MmRkLWZlNWQzOWU0NWFkOSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImZpbGlwakBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJGaWxpcCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJKb3Zhbm92aWMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTiIsImV4cCI6MTY5MzMzMjk0OCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDozMDAwLyJ9.ET2mLJqJh9-0-bzT63x7GvtmNwLxP5kkDL_PpHr0vuw';
        const decoded=jwt_decode(token);
        setDecodedToken(decoded);
        console.log(decoded);

        decodeJwt();
        console.log(decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']);
    }*/

    const prepareSearch=async(e)=>{
        await setSearchParam((mark?"mark="+mark.value+"&":"") +
        (type?"type="+type.value+"&":"") +
        (yearStart!==null?"yearStart="+yearStart.value+"&":"") +
        (yearEnd!==null?"yearEnd="+yearEnd.value+"&":"") +
        (gear?"gear="+gear.value+"&":"") +
        (drive?"drive="+drive.value+"&":"") +
        (state?"state="+state.value+"&":"") +
        (price?"price="+price+"&":"") +
        (km?"km="+km:""));
        if (searchParam===""){
            setSearchParam("none");
        }
    }

    const searchIt=()=>{
        
    }

    useEffect(()=>{
        prepareSearch();
    },[mark,type,yearStart,yearEnd,gear,drive,price])

    const saveSearch=async(e)=>{
        try {
            const response = await axios.post('https://localhost:5001/api/SavedSearch',{search,userId});
            alert("Pretraga je uspesno sacuvana!");
            setShowModal(false);
        } catch (error) {
            alert("Trenutno nije moguce sacuvati pretragu. Molimo vas pokusajte kasnije. Hvala!");
        }
    }

    return(
        <>
        <div className="container p-0 mb-5 " style={{backgroundColor:"black",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
            <div className="row m-0 p-0">
                <ul className="nav nav-tabs">
                    <li className="nav-item tab-hover">
                        <button className={activeTab === "tab1" ? "nav-link active" : "nav-link "} onClick={tabCars} style={{textDecoration:"none",height:"100%",border:"none",borderRadius:'0px',backgroundColor: activeTab === "cars" ? "#097969" : "transparent"}}><span style={{color:"white",fontSize:"20px"}}><b>Automobili</b></span></button>
                    </li>
                </ul>
            </div>
            <div className={showModal ? "modal-overlay-active" : "modal-overlay"}>
                    <div className="row m-1" style={{backgroundColor:'white'}}>
                        <div className="toast-body text-center">
                            <p className="text-break my-1 p-0">Da li ste sigurni da zelite da sacuvate trenutnu pretragu?</p>
                            <br></br>
                            <p className="text-break my-0 p-0">{searchShow}</p>
                            <div className="mt-2 pt-2 border-top">
                                <button type="button" className="btn search-button m-1" onClick={saveSearch}>Sacuvaj!</button>
                                <button type="button" className="btn btn-secondary m-1" onClick={closeModal}><i className="fa-solid fa-xmark" style={{color: '#000000'}}></i></button>
                                </div>
                        </div>
                    </div>
                </div>
            <div className="row m-0 p-0" style={{backgroundColor:'#5968B8'}}>
                <div className="row justify-content-center p-3 my-1">
                    <div className="col-md-3">
                        <Select options={optionsMark}
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
                    <div className="col-md-3">
                        <Select
                                options={optionsState}
                                value={state}
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
                <div className="row  pb-3 my-1 ">
                    <div className="col-md-4 offset-md-4 d-flex justify-content-center">
                        <Link className="btn btn-success w-75 search-button" to={`search/${searchParam}`} onClick={searchIt} ><p className="m-0 p-0" style={{color:'white',textDecoration:'none'}}>Pretrazi</p></Link>
                    </div>
                    <div className="col-md-4">
                        {(localStorage.getItem("token").length) ?<div className="row justify-content-around">
                            <button className="btn btn-success w-50 search-button " onClick={openModal} ><p className="m-0 p-0" style={{color:'white'}}>Sacuvaj pretragu!</p></button>
                        </div>:<span></span>}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};