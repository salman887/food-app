import Branding from "../../components/HomeComponents/Brands";
import Features from "../../components/HomeComponents/Featuers";
import Header from "../../components/HomeComponents/Header";
import HeaderOptions from "../../components/HomeComponents/HeaderOptions";
import HeaderSearch from "../../components/HomeComponents/HeaderSearch";
import Trending from "../../components/HomeComponents/Trending";
import useWindowDimensions from "../../utils/customHooks/useWindowDimensions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from '../../components/Footer'
import './home.css'

const HomeScreen = () => {

  const { width, } = useWindowDimensions()

  return (
    width <= 450 ?
      <div className="headhome">
        <Header />
        <HeaderOptions />
        <HeaderSearch />
        <Trending />
        <h2 className="homefeatuers">Featuers</h2>
        <Features />
        <h2 className="homesuggest">Suggestions for you</h2>
        <Carousel >
          <div >
            <img className="firstimg" src='https://thumbs.dreamstime.com/b/food-banner-pasta-chicken-pumpkin-salad-meat-mushrooms-white-wooden-background-top-view-free-space-text-202154861.jpg' alt="" />
          </div>
          <div>
            <img className="secondimg" src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000" alt="" />
          </div>
          <div>
            <img className="thirdimg" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="" />
          </div>
        </Carousel>
        <h2 className="brandhome">New Brands</h2>
        <Branding />
<Footer/>
      </div> : null

  );
}

export default HomeScreen;
