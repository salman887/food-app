import FoodCard from "../../components/HomeComponents/FoodCard";
import Header from "../../components/HomeComponents/Header";
import HeaderSearch from "../../components/HomeComponents/HeaderSearch";
import useWindowDimensions from "../../utils/customHooks/useWindowDimensions";
import Filter from '../../images/filter.svg'
import Footer from '../../components/Footer'
import {useNavigate } from 'react-router-dom';



function FoodAndDrinks() {
    const {width} = useWindowDimensions()
    const navigate = useNavigate();

    const trendingImages = [
        { img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'KFC pakistan', locatin: 'NationWide', rating:5 },
        { img: 'https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000', name: 'KFC pakistan', locatin: 'NationWide', rating:3 },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVf_cTNwSdPxvjnlWCupeiVwD9ITITPKzIV7wdIngSLPHllEIvB5CJKmmvqXLYy7J_Os&usqp=CAU', name: 'KFC pakistan', locatin: 'NationWide' , rating:3},
        { img: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528', name: 'KFC pakistan', locatin: 'NationWide' , rating:5},
        { img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80', name: 'KFC pakistan', locatin: 'NationWide', rating:2 },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVf_cTNwSdPxvjnlWCupeiVwD9ITITPKzIV7wdIngSLPHllEIvB5CJKmmvqXLYy7J_Os&usqp=CAU', name: 'KFC pakistan', locatin: 'NationWide' , rating:3},
        { img: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528', name: 'KFC pakistan', locatin: 'NationWide' , rating:0},
        { img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80', name: 'KFC pakistan', locatin: 'NationWide', rating:2 }
    ]
    const filters = ["Filters", 'Top-rated', 'New', 'Delivery', 'Pizza', 'Cafe']

    return (
        width <= 450 ?
        <div style={{ padding: '0px 20px 10px 20px',  }}>
        <Header showback heading={"Food & Drink"} phone />
            <HeaderSearch />
            
            <div style={{ height:'100%', width:'100%'}}>
                <div style={{display:'flex', justifyContent:'space-around', marginTop:10}}>
            {filters.map((item,index)=> (
                <div style={{ padding:'5px', border:'2px solid #000', borderRadius: '5px' ,display:'flex', backgroundColor:index === 0 ?'black':'white', alignItems:'center'}}  onClick={() => index === 0 && navigate('/filters') }>
                    {index === 0 ? <img src={Filter} alt="" style={{height:'10px'}} />: null}
                    <p style={{fontSize:10, fontWeight: 'bold', margin:'3px 7px', color:index === 0 ?'white':'black'}}>{item}</p>
                </div>
            ))}
            </div> 
                 {trendingImages.map(item => (
                <a href="/offers">

                    <FoodCard item={item} imgWidth={width} imgHeight={'110px'} rating/>
                </a>

                ))}
             </div> 
             <Footer/>
        </div>
        :null

    );
}

export default FoodAndDrinks;
