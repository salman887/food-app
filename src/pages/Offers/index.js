import Header from "../../components/HomeComponents/Header";
import useWindowDimensions from "../../utils/customHooks/useWindowDimensions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Rating } from 'react-simple-star-rating'
import React, { useState } from "react";
import Location from '../../images/location.svg'
import FoodAndDrink from '../../images/foodAndDrink.svg'

import Info from '../../images/info.svg'
import ArrowRight from '../../images/arrowRight.svg'
import Progress_bar from "../../components/proressBar";



function Offers() {
    const { width } = useWindowDimensions()
    const [tab, setTab] = useState(1)

    const filterType = ["Sort by", 'Offer type', 'Food & Drink',]
    const myStyle = {
        backgroundImage:
            "url('https://cdn.wallpapersafari.com/29/46/FkSD9l.jpg')",
        height: '85vh',
        width: '100vw',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px'
    };
    return (
        width <= 450 ?
            <div>
                <div style={{ padding: '0px 10px' }}>
                    <Header heading={'Offer'} phone showback profile noti />
                </div>  
                <div style={myStyle}>
                    <div style={{ position: 'absolute', height: tab === 3 ? '50vh' : '50vh', width: '96vw', backgroundColor: 'white', bottom: '0px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', padding: '10px 10px', }}>
                        <Heading tab={tab} setTab={setTab} />
                        {tab === 1 ? <OfferList /> : tab === 2 ? <Details /> : <Reviews />}
                        {/* <PayingPayList/> */}
                    </div>
                </div>
            </div>

            : null

    );
}


const Heading = ({ tab, setTab }) => {
    return (
        <div style={{ width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', height: "30px", }}>

            <p onClick={() => setTab(1)} style={{ backgroundColor: tab === 1 ? 'black' : '', padding: '5px 13px', fontSize: '12px', fontWeight: 'bold', margin: 10, border: '1px solid black', borderRadius: 5, textAlign: 'center', color: tab === 1 ? 'white' : 'black' }}>Offer</p>

            <p onClick={() => setTab(2)} style={{ backgroundColor: tab === 2 ? 'black' : '', padding: '5px 13px', fontSize: '12px', fontWeight: 'bold', margin: 10, border: '1px solid black', borderRadius: 5, textAlign: 'center', color: tab === 2 ? 'white' : 'black' }}>Details</p>

            <p onClick={() => setTab(3)} style={{ backgroundColor: tab === 3 ? 'black' : '', padding: '5px 13px', fontSize: '12px', fontWeight: 'bold', margin: 10, border: '1px solid black', borderRadius: 5, textAlign: 'center', color: tab === 3 ? 'white' : 'black' }}>Reviews</p>
        </div>
    )
}

const OfferList = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <div style={{ alignItems: 'center', display: 'flex', height: '10px' }}>
                    <Rating size={18} iconsCount={1} initialValue={1} />
                    <span style={{ fontSize: '15px', marginTop: '29px', marginLeft: '5px', fontWeight: 'bold' }}>BROADWAY</span>
                </div>
                <div style={{ alignItems: 'center', display: 'flex', height: '10px', }}>
                    <img src={Location} alt="" style={{ width: '20px', marginTop: '29px', }} />
                    <span style={{ fontSize: '15px', marginTop: '29px', marginLeft: '5px', fontWeight: 'bold' }}>Broad Way</span>
                </div>
            </div>
            <span style={{ fontSize: '14px', marginTop: '-10px', marginLeft: '5px', fontWeight: '600', margin: '2px' }}>Offer from karachi retail</span>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                    <div style={{ height: '50px', backgroundColor: '#fff', width: '50px', borderRadius: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)' }} >
                        <img src={FoodAndDrink} alt="" style={{ width: "28px" }} />
                    </div>
                    <span class="verticalDivider" />
                </div>
                <div style={{ display: 'grid', alignItems: 'center', marginLeft: '15px', }}>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '30px' }}>Broad Way</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '-75px', color: 'lightgray' }}>Offer from karachi retail</span>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                    <div style={{ height: '50px', backgroundColor: '#fff', width: '50px', borderRadius: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)' }} >
                        <img src={FoodAndDrink} alt="" style={{ width: "28px" }} />
                    </div>
                    <span class="verticalDivider" />
                </div>
                <div style={{ display: 'grid', alignItems: 'center', marginLeft: '15px', }}>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '30px' }}>Broad Way</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '-75px', color: 'lightgray' }}>Offer from karachi retail</span>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                    <div style={{ height: '50px', backgroundColor: '#fff', width: '50px', borderRadius: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)' }} >
                        <img src={FoodAndDrink} alt="" style={{ width: "28px" }} />
                    </div>
                    <span class="verticalDivider" />
                </div>
                <div style={{ display: 'grid', alignItems: 'center', marginLeft: '15px', }}>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '30px' }}>Broad Way</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '-75px', color: 'lightgray' }}>Offer from karachi retail</span>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                    <div style={{ height: '50px', backgroundColor: '#fff', width: '50px', borderRadius: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)' }} >
                        <img src={FoodAndDrink} alt="" style={{ width: "28px" }} />
                    </div>
                </div>
                <div style={{ display: 'grid', alignItems: 'center', marginLeft: '15px', }}>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>Broad Way</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '-20px', color: 'lightgray' }}>Offer from karachi retail</span>
                </div>
            </div>

        </>
    )
}

const PayingPayList = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <div style={{ alignItems: 'center', display: 'flex', height: '10px' }}>
                    <Rating size={18} iconsCount={1} initialValue={1} />
                    <span style={{ fontSize: '15px', marginTop: '29px', marginLeft: '5px', fontWeight: 'bold' }}>BROADWAY</span>
                </div>
                <div style={{ alignItems: 'center', display: 'flex', height: '10px', }}>
                    <img src={Location} alt="" style={{ width: '20px', marginTop: '29px', }} />
                    <span style={{ fontSize: '15px', marginTop: '29px', marginLeft: '5px', fontWeight: 'bold' }}>M. Ali Society</span>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                    <span style={{ fontSize: '15px', marginTop: '45px', marginBottom: '30px', marginLeft: '5px' }}>Total bill amount (as mentioned on bill)</span>
                    <span style={{ fontSize: '15px', marginTop: '45px', marginBottom: '30px', marginLeft: '5px', fontWeight: 'bold', margin: '2px' }}>PKR 1000</span>
            </div>


            {/* <span style={{ fontSize: '14px', marginTop: '-10px', marginLeft: '5px', fontWeight: '600', margin: '2px' }}>Offer from karachi retail</span> */}

            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                    <div style={{ height: '50px', backgroundColor: '#fff', width: '50px', borderRadius: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)' }} >
                        <img src={FoodAndDrink} alt="" style={{ width: "28px" }} />
                    </div>
                    <span class="verticalDivider" />
                </div>
                <div style={{ display: 'grid', alignItems: 'center', marginLeft: '15px', }}>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '30px' }}>Broad Way</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '-75px', color: 'lightgray' }}>Offer from karachi retail</span>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                    <div style={{ height: '50px', backgroundColor: '#fff', width: '50px', borderRadius: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)' }} >
                        <img src={FoodAndDrink} alt="" style={{ width: "28px" }} />
                    </div>
                    <span class="verticalDivider" />
                </div>
                <div style={{ display: 'grid', alignItems: 'center', marginLeft: '15px', }}>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '30px' }}>Broad Way</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '-75px', color: 'lightgray' }}>Offer from karachi retail</span>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                    <div style={{ height: '50px', backgroundColor: '#fff', width: '50px', borderRadius: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)' }} >
                        <img src={FoodAndDrink} alt="" style={{ width: "28px" }} />
                    </div>
                    <span class="verticalDivider" />
                </div>
                <div style={{ display: 'grid', alignItems: 'center', marginLeft: '15px', }}>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '30px' }}>Broad Way</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '-75px', color: 'lightgray' }}>Offer from karachi retail</span>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                    <div style={{ height: '50px', backgroundColor: '#fff', width: '50px', borderRadius: '25px', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)' }} >
                        <img src={FoodAndDrink} alt="" style={{ width: "28px" }} />
                    </div>
                </div>
                <div style={{ display: 'grid', alignItems: 'center', marginLeft: '15px', }}>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>Broad Way</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '-20px', color: 'lightgray' }}>Offer from karachi retail</span>
                </div>
            </div>

        </>
    )
}


const Details = () => {
    return (
        <div style={{ padding: 10 }}>
            <p style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'sans-serif', margin: '0px' }}>KARACHI</p>
            <p style={{ fontSize: '15px', fontWeight: '400', fontFamily: 'sans-serif', margin: '5px 0px' }}>Dolmen Mall, Clifton</p>
            <p style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'sans-serif', margin: '0px' }}>Distance: 0 KM</p>

            <div>
                <p style={{ fontSize: '15px', fontWeight: '500', fontFamily: 'sans-serif', margin: '30px 0px 0px 0px' }}> Like Broadway Musical is an expression of feeling, thoughts and emotions, Broadway </p>
                <p style={{ fontSize: '15px', fontWeight: '400', fontFamily: 'sans-serif', margin: '5px 0px', color: 'lightgray' }}> Show more</p>
            </div>
            <img src="https://miro.medium.com/max/1400/1*FbzQStUzSsLChBJE9108hg.png" alt="" style={{ width: '100%' }} />
            <p style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'sans-serif', margin: '0px' }}>Addtional Details</p>

        </div>
    )
}
const Reviews = () => {
    const progress = [{ pro: '5' }, { pro: '4' }, { pro: '3' }, { pro: '4' }, { pro: '10' },]
    const review = [{
        name: 'salman',
        img: 'https://icon-library.com/images/user-icon-jpg/user-icon-jpg-5.jpg',
        rating: 5
    },
    {
        name: 'Ali',
        img: 'https://icon-library.com/images/user-icon-jpg/user-icon-jpg-5.jpg',
        rating: 2
    },
    {
        name: 'Haider',
        img: 'https://icon-library.com/images/user-icon-jpg/user-icon-jpg-5.jpg',
        rating: 3
    },
    {
        name: 'Faiz',
        img: 'https://icon-library.com/images/user-icon-jpg/user-icon-jpg-5.jpg',
        rating: 4
    },]



    return (
        <div style={{ padding: 10 }}>
            <div style={{ display: 'flex', justifyContent: "space-between", width: '100%', alignItems: 'center' }}>
                <div style={{ width: '55%', display: 'flex', justifyContent: "space-between" }}>
                    <p style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'sans-serif', margin: '0px' }}>Reviews And Details</p>
                    <img src={Info} alt="" style={{ width: '20px' }} />
                </div>
                <img src={ArrowRight} alt="" style={{ width: '30px' }} />
            </div>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: '70px' }}>4.1</h1>
                    <Rating style={{ position: 'absolute', top: '130px', left: '22px' }} size={17} iconsCount={5} initialValue={4} fillColor='green' />
                    <span style={{ fontSize: '10px', fontWeight: '400', position: 'absolute', top: '189px', left: '28px' }}>Broad Way</span>
                </div>
                <div style={{ width: '100%', alignSelf: 'center', marginLeft: '10px', marginBottom: '12px' }}>
                    {
                        progress.map(item => (

                            <div style={{ display: 'flex', alignItems: 'center', }}>
                                <span style={{ fontSize: '15px', fontWeight: '500' }}>{item.pro}</span>
                                <Progress_bar bgcolor="green" progress={item.pro} height={10} />
                            </div>
                        ))
                    }

                </div>
            </div>
            <div>
                <p style={{ fontSize: '24px', fontWeight: '600', color: 'gray' }}>All Reviews</p>
                {review.map(item => (
                    <div style={{ display: 'flex', margin: 20, alignItems: 'center', height:'50px' }}>
                        <img src={item.img} alt="" style={{ width: "40px", borderRadius: '20px', marginRight: '10px', height: '42px' }} />
                        <div>
                            <p style={{ fontSize: '14px', fontWeight: '600', margin: '10px 0px 0px 0px ' }}>{item.name}</p>
                            <div style={{ display: 'flex', height: '42px', margin:0 }}>
                                <p style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Rated</p>
                                <Rating style={{ fontSize: '0px', position:'absolute', marginTop:'2px', marginLeft:'5px',  }} size={17} iconsCount={5} initialValue={4} />
                            </div>
                            <p style={{ fontSize: '12px', fontWeight: '400', marginTop: '-20px', color:'gray' }}>Thnaks</p>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Offers;
