import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchBar from '../../components/SearchBara/SearchBar'
import NearbyDestinations from '../../components/NearbyAttraction/NearbyDestinations'
function Attraction() {
  return (
    <div>
      <Navbar/>
      <Header
        type="home"
        headerTitle="Attractions, activities, and experiences"
        headerDescription="Discover new attractions and experiences to match your interests and travel style"
        hideSearch={true}
      />
      <SearchBar/>
      <NearbyDestinations/>
    </div>
    

  )
}

export default Attraction
