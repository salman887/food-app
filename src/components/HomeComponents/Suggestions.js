import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css';

const Suggestions = () => {
    (
    <>
        <h2>Suggestions for you</h2>
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
    </>
    )
}

export default Suggestions;
