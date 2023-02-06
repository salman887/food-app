import React from "react";
import FoodAndDrink from '../../images/foodAndDrink.svg'
import retail from '../../images/retail.svg'
import services from '../../images/services.svg'
import spaAndSalon from '../../images/spaAndSalon.svg'
import healthAndFitness from '../../images/healthAndFitness.svg'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import {  token } from "../../App";



const upperArr = [{
    name: 'Food & Drinks',
    image: FoodAndDrink,
    width: '62px',
    id:1
},
{
    name: 'Salon & Spa',
    image: spaAndSalon,
    width: '70px',
    id:2,

},
{
    name: 'Leisure & Attraction',
    image: FoodAndDrink,
    width: '61px',
    id:3

},
{
    name: 'Services',
    image: services,
    width: '80px',
    id:4

}
]
const lowerArr = [{
    name: 'Health & Fitnes',
    image: retail,
    width: '51px',
    id:5

},
{
    name: 'Travel & Tourism',
    image: healthAndFitness,
    width: '71px',
    id:6

},
{
    name: 'Travel & Tourism',
    image: retail,
    width: '51px',
    id:7

},
{
    name: 'Food Street',
    image: healthAndFitness,
    width: '71px',
    id:9

},]

// eslint-disable-next-line react-hooks/rules-of-hooks

const TrendingFooter = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`,

          }
            const login = "https://v3beta.vouch365.mobi/api/categories";
         
            axios.get(login , headers)
            .then(response =>{
                setData(response.data.data)
               console.log(response, "---------------->")
              })
            .catch(error => {
                console.error('There was an error!', error);
            }); 
    },[])
    
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', width:'103%' }}>
                {upperArr.map(item => (
                    <div style={{ height: '70px', padding: 15 }}  >
                        <a href={"/foodAndDrinks/"+item.id}>
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
                        <a href={"/foodAndDrinks/"+item.id}>

                    <div style={{ height: '70px', padding: 15, }} >
                        <div style={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                            <img src={item.image} alt="" style={{ width: item.width }} />
                        </div>
                        <p style={{ fontSize: '11px', textAlign: 'center' }}>{item.name}</p>
                    </div>
                    </a>
                ))}
            </div>
        </>
    );
}

export default TrendingFooter;
