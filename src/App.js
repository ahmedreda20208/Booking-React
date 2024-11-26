import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Reserve from './pages/reserve/Reserve';
import Flight from './pages/flight/Flight';
import Car from './pages/car/Car';
import Attraction from './pages/attraction/Attraction';
import Airport from './pages/airtaxi/airport';
import Dashboard from './pages/dashboard/Dashboard';
import ForgotPassword from './pages/forgotpass/ForgotPassword';
import ResetLinkSent from './pages/resetlink/ResetLinkSent';
import PaymentForm from './pages/payment/PaymentForm';
import HotelL from './pages/hotelL/HotelL';
import HotelLi from './pages/hotelLi/HotelLi';
import ListL from './pages/listL/ListL';
import FlighList from './pages/flightList/FlighList';
import BookingOptions from './pages/chooose/BookingOptions';
import CarDataS from './pages/carData/CarDataS';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import CarBookA from './pages/carBook/CarBookA';
import CarPayment from './pages/carPayment/CarPayment';
import AttracData from './pages/attractionData/AttracData';
import AttracDetail from './pages/attreactionDetail/AttracDetail';
import AttracPay from './pages/attractionPayment/AttracPay';
import AttracCard from './pages/attracPayCard/AttracCard';
import Profile from './pages/profile/Profile';
import ProfileA from './pages/profileA/ProfileA';
import ProfileRef from './pages/profileRef/ProfileRef';
import ProfilePay from './pages/profilePay/ProfilePay';
import ProfilePriva from './pages/profilePriva/ProfilePriva';
import ProfileSec from './pages/profileSec/ProfileSec';
import ProfileEmail from './pages/profileEmail/ProfileEmail';
import ProfileOther from './pages/profileOther/ProfileOther';
import BookingTrips from './pages/bookingtrips/BookingTrips';
import BookingWallet from './pages/bookingWallet/BookingWallet';
import BookingRiw from './pages/boookingRiw/BookingRiw';
import BookingSave from './pages/bookingSaved/BookingSave';

function App() {
  const handleResetLinkSent = (identifier) => {
    // You can handle any additional logic here if needed
    <div className="App">
            <TawkMessengerReact
                propertyId="667486ca9d7f358570d1c3c9"
                widgetId="1i0rit1si"/>
        </div>
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/hotels/2" element={<HotelL />} />
        <Route path="/hotels/3" element={<HotelLi />} />
        <Route path="/ListL" element={<ListL />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/car" element={<Car />} />
        <Route path="/attraction" element={<Attraction />} />
        <Route path="/airport" element={<Airport />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword onResetLinkSent={handleResetLinkSent} />} />
        <Route path="/reset-link-sent" element={<ResetLinkSent />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/flight-data" element={<FlighList/>} />
        <Route path="/choose" element={<BookingOptions/>} />
        <Route path="/c-data" element={<CarDataS/>} />
        <Route path="/c-book" element={<CarBookA/>} />
        <Route path="/c-pay" element={<CarPayment/>} />
        <Route path="/a-data" element={<AttracData/>} />
        <Route path="/nubian-village-tour" element={<AttracDetail/>} />
        <Route path="/a-pay" element={<AttracPay/>} />
        <Route path="/a-payment" element={<AttracCard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/manage" element={<ProfileA/>} />
        <Route path="/pref" element={<ProfileRef/>} />
        <Route path="/psec" element={<ProfileSec/>} />
        <Route path="/ppay" element={<ProfilePay/>} />
        <Route path="/ppriv" element={<ProfilePriva/>} />
        <Route path="/pemail" element={<ProfileEmail/>} />
        <Route path="/pother" element={<ProfileOther/>} />
        <Route path="/booktrip" element={<BookingTrips/>} />
        <Route path="/bookwall" element={<BookingWallet/>} />
        <Route path="/bookriw" element={<BookingRiw/>} />
        <Route path="/booksave" element={<BookingSave/>} />

























        










      </Routes>
    </BrowserRouter>
  );
}

export default App;
