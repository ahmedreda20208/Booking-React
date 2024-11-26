import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchFlight from '../../components/itemFlight/SearchFlight'
import FilterPanel from '../../components/leftFlight/FilterPanel'
const FlighList = () => {
  return (
    <div>
        <Navbar/>
       <Header type="list" isFlight={true} />
       <SearchFlight/>
       <FilterPanel/>
    </div>
  )
}

export default FlighList
