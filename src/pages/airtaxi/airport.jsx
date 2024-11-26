import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import AirportTaxiBooking from '../../components/AirSearch/AirportTaxiBooking'
function airport() {
  return (
    <div>
      <Navbar/>
      <Header type="list" isFlight={true} />
      <AirportTaxiBooking/>
    </div>
  )
}

export default airport
