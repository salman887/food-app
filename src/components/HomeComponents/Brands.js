import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css';
const Branding = () => {
    const trendingImages = [
        {img:'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name:'KFC pakistan', locatin:'NationWide'},
        {img:'https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000', name:'KFC pakistan', locatin:'NationWide'},
        {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVf_cTNwSdPxvjnlWCupeiVwD9ITITPKzIV7wdIngSLPHllEIvB5CJKmmvqXLYy7J_Os&usqp=CAU', name:'KFC pakistan', locatin:'NationWide'},
        {img:'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528', name:'KFC pakistan', locatin:'NationWide'},
        {img:'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80', name:'KFC pakistan', locatin:'NationWide'}
    ]
    return (
        <>
            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', }}>
                {trendingImages.map(item => (
                    <div style={{
                        borderTopRightRadius:10,
                        borderTopLeftRadius:10,
                         display: 'inline-block',height:'150px', marginRight:'10px', boxShadow: '0px 1px 0px 0px #000' ,
                         paddingLeft:2
                }}>
                    <img src={item.img} alt=""
                        style={{
                            height: '70px',
                            width: '120px',
                            borderTopRightRadius:10,
                            borderTopLeftRadius:10
                        }} />
                        <p style={{fontSize:'15px', margin:0, fontWeight:'600'}}>{item.name}</p>

                        <p style={{fontSize:'12px',margin:0}}>{item.locatin}</p>
                        </div>
                ))}
            </div>
        </>
    );
}

export default Branding;
