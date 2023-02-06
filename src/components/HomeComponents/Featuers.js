import React from "react";

import FoodAndDrink from '../../images/foodAndDrink.svg'
import Delivery from '../../images/delivery.svg'
import retail from '../../images/retail.svg'
import services from '../../images/services.svg'
import spaAndSalon from '../../images/spaAndSalon.svg'
import healthAndFitness from '../../images/healthAndFitness.svg'
import axios from 'axios';




const upperArr = [{
    name: 'Food & Drinks',
    image: FoodAndDrink,
    width: '50px',
    id:1
},
{
    name: 'Salon & Spa',
    image: spaAndSalon,
    width: '50px',
    id:2,

},
{
    name: 'Leisure & Attraction',
    image: FoodAndDrink,
    width: '50px',
    id:3

},
{
    name: 'Services',
    image: services,
    width: '50px',
    id:4

}
]


const Features = () => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                {upperArr.map(item => (
                    
                    <div style={{ height: '70px', backgroundColor: '#EA5457', width: '70px', borderRadius: '35px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                        <img src={item.image} alt="" style={{ width: item.width }} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Features;
