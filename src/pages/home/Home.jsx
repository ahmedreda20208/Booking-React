import PropertyList from "../../components/propertyList/PropertyList";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import "./home.css";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/model/Model";
const Home = () => {
    return (
        <div>
            
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browser by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
                <Modal/>
            </div>
        </div>
    )
}
export default Home;

