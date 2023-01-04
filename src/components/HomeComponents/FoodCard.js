import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css';
import { Rating } from 'react-simple-star-rating'

const FoodCard = ({ item, imgWidth, imgHeight, rating }) => {

    return (
        <div style={{
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            display: 'inline-block', height: '180px', marginRight: '10px', boxShadow: '0px 1px 0px 0px #000',
            paddingLeft: imgWidth ? 5 : 2,
            margin: '10px 2px 10px 2px'

        }}>
            <img src={item.img} alt=""
                style={{
                    height: imgHeight || '70px',
                    width: imgWidth ? `${imgWidth / 2.36}px` : '120px',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }} />
            <p style={{ fontSize: '15px', margin: 0, fontWeight: '600' }}>{item.name}</p>
            <p style={{ fontSize: '12px', margin: 0 }}>{item.locatin}</p>
            {rating ? <Rating size={18}     iconsCount={5} initialValue={item.rating} />
 : null}
        </div>

    );
}

export default FoodCard;
