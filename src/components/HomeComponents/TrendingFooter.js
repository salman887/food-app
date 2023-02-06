import React from "react";
import FoodAndDrink from '../../images/foodAndDrink.svg'
import retail from '../../images/retail.svg'
import services from '../../images/services.svg'
import spaAndSalon from '../../images/spaAndSalon.svg'
import healthAndFitness from '../../images/healthAndFitness.svg'

const upperArr = [{
    name: 'Food & Drinks',
    image: FoodAndDrink,
    width: '62px'
},
{
    name: 'Salon & Spa',
    image: spaAndSalon,
    width: '70px'

},
{
    name: 'Entertainment',
    image: FoodAndDrink,
    width: '61px'

},
{
    name: 'Services',
    image: services,
    width: '80px'

}
]
const lowerArr = [{
    name: 'Retail',
    image: retail,
    width: '51px'

},
{
    name: 'Health & Fitness',
    image: healthAndFitness,
    width: '71px'

},
{
    name: 'Travel & Tourism',
    image: retail,
    width: '51px'

},
{
    name: 'Health & Fitness',
    image: healthAndFitness,
    width: '71px'

},]

const TrendingFooter = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', width:'103%' }}>
                {upperArr.map(item => (
                    <div style={{ height: '70px', padding: 15 }}  >
                        <a href="/foodAndDrinks">
                        <div style={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={item.image} alt="" style={{ width: item.width }} />
                        </div>
                        <p style={{ fontSize: '11px', textAlign: 'center' }}>{item.name}</p>
                        </a>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop:'10px' }}>
                {lowerArr.map(item => (
                    <div style={{ height: '70px', padding: 15, }} >
                        <div style={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                            <img src={item.image} alt="" style={{ width: item.width }} />
                        </div>
                        <p style={{ fontSize: '11px', textAlign: 'center' }}>{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TrendingFooter;
