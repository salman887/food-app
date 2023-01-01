import React from "react";

import FoodAndDrink from '../../images/foodAndDrink.svg'
import Delivery from '../../images/delivery.svg'
import retail from '../../images/retail.svg'
import services from '../../images/services.svg'
import spaAndSalon from '../../images/spaAndSalon.svg'
import healthAndFitness from '../../images/healthAndFitness.svg'


const upperArr = [{
    name: 'Food & Drinks',
    image: FoodAndDrink,
    width: '50px'
},
{
    name: 'Salon & Spa',
    image: spaAndSalon,
    width: '50px'

},
{
    name: 'Entertainment',
    image: FoodAndDrink,
    width: '50px'

},
{
    name: 'Services',
    image: services,
    width: '50px'

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
