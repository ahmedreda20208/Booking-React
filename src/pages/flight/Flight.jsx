import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import FlightSe from "../../components/flighsearch/FlightSe";
import Header from '../../components/header/Header';
function Flight() {

  return (
    <div>
      <Navbar />
      <Header type="list" isFlight={true} />
      <FlightSe />
      

    </div>
  )
}

export default Flight