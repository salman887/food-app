import React from "react";
import TrendingFooter from "./TrendingFooter";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css';
const Trending = () => {
    const trendingImages = [
        'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000',
        'https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVf_cTNwSdPxvjnlWCupeiVwD9ITITPKzIV7wdIngSLPHllEIvB5CJKmmvqXLYy7J_Os&usqp=CAU',
        'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528',
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80'
    ]
    return (
        <>
        <h2 style={{color:'#686C6E'}}>Trending this week</h2>
            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap',  }}>
                {trendingImages.map(item => (
                    <img src={item} alt=""
                        style={{
                            height: '200px',
                            width: '200px',
                            display: 'inline-block',
                            borderRadius: "20px",
                            padding: 10
                        }} />
                ))}
            </div>
            <TrendingFooter />
        </>
    );
}

export default Trending;
