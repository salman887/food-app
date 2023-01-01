import Branding from "../../components/HomeComponents/Brands";
import Features from "../../components/HomeComponents/Featuers";
import Header from "../../components/HomeComponents/Header";
import HeaderOptions from "../../components/HomeComponents/HeaderOptions";
import HeaderSearch from "../../components/HomeComponents/HeaderSearch";
import Trending from "../../components/HomeComponents/Trending";
import useWindowDimensions from "../../utils/customHooks/useWindowDimensions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HomeScreen = () => {

  const { width, } = useWindowDimensions()

  return (
    width <= 450 ?
      <div style={{ padding: '0px 20px 10px 20px' }}>
        <Header />
        <HeaderOptions />
        <HeaderSearch />
        <Trending />
        <h2 style={{ color: '#686C6E' }}>Featuers</h2>
        <Features />
        <h2 style={{ color: '#686C6E' }}>Suggestions for you</h2>
        <Carousel >
          <div >
            <img style={{ borderRadius: '30px', height: '179px', }} src='https://thumbs.dreamstime.com/b/food-banner-pasta-chicken-pumpkin-salad-meat-mushrooms-white-wooden-background-top-view-free-space-text-202154861.jpg' alt="" />
          </div>
          <div>
            <img style={{ borderRadius: '30px', height: '179px' }} src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000" alt="" />
          </div>
          <div>
            <img style={{ borderRadius: '30px', height: '179px' }} src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="" />
          </div>
        </Carousel>
        <h2 style={{ margin: '4px', color: '#686C6E' }}>New Brands</h2>
        <Branding />

      </div> : null

  );
}

export default HomeScreen;
