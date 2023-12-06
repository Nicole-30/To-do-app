import { useEffect, useState } from "react";
import React from 'react';
import Parent from "./Parent";
// import Navbar from "./Navbar";

function Child() {

    const[details, setDetails]= useState(null)

    useEffect(()=>{
        fetch('http://localhost:8001/data')
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            setDetails(data);
        })
    },[])


  return (
    <div>
      {details && <Parent dis={details} title ='My Blog details !'/> }
      {/* <Parent dis={details.filter((details) => details.name ==='Nicole')} title ='My Blog details !'/> */}
      {/* <Navbar dis={details} title ='My Blog details !' handleSearch={handleSearch}/> */}
      
    </div>
  );
}

export default Child;
