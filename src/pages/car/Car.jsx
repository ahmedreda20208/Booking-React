import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import CarRentalSearch from '../../components/CarSearch/CarRentalSearch'

function Car() {
  return (
    <div>
      <Navbar/>
      <Header
        type="home"
        headerTitle="Car rentals for any kind of trip"
        headerDescription="Great deals at great prices, from the biggest car rental companies"
        hideSearch={true}
      />
      <CarRentalSearch/>
    </div>
  )
}

export default Car
