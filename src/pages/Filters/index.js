import Header from "../../components/HomeComponents/Header";
import useWindowDimensions from "../../utils/customHooks/useWindowDimensions";
import ArrowDown from '../../images/dropdown.svg'
import ArrowUp from '../../images/arrowUp.svg'
import React, { useState } from "react";
import HeaderSearch from "../../components/HomeComponents/HeaderSearch";


function Filters() {
    const { width } = useWindowDimensions()
    const [showAll, setShowAll] = useState(false)

    const filterType = ["Sort by", 'Offer type', 'Food & Drink',]

    return (
        width <= 450 ?
            <div style={{ padding: '0px 20px 10px 20px', }}>
                <Header heading={showAll ? 'Food & drinks' : "Sort by & Filters"} cancel />
                {showAll ? <hr class="solid" /> : null}

                {showAll ? <HeaderSearch img dropDown /> : null}
                {!showAll ? <>
                    <div style={{ display: 'flex', }}>
                        {filterType.map((item, index) => (
                            <div style={{ border: '1px solid #000', display: 'flex', backgroundColor: index === 0 ? 'black' : 'white', alignItems: 'center' }} >
                                <p style={{ fontSize: 10, margin: '3px 7px', color: index === 0 ? 'white' : 'black', padding: '5px 10px' }}>{item}</p>
                            </div>
                        ))}
                    </div>
                    <hr class="solid" />
                    <SortBy />
                    <hr class="solid" />
                    <OfferType />
                    <FoodAndDrinks setShowAll={setShowAll} />


                  </> : <ShowAll/>}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
                        <p style={{ marginTop: '5px', textDecoration: 'underline', color: 'blueviolet' }} onClick={() => setShowAll(false)}>Close All</p>
                        <button style={{ marginLeft: 10, width: '30%', backgroundColor: 'red', borderRadius: 15, padding: '10px', border: 'none' }}>Done</button>

                    </div>
            </div>
            : null

    );
}


const ShowAll = () => {

    const filter = [
        'Chai', 'Coffe', 'Salad', 'Karai', 'Burger', ' Zinder Burger', 'BBQ', "Nihari", "Lassi", 'Pasta', 'Sandwich', 'Wrap', 'Dinner', 'Breakfast', 'Soup', 'Drinks', 'Kabab', 'Pizza', 'Cake', 'Ice-creame', 
    ]
    function onChangeValue(event) {
        console.log(event.target.value);
    }
    return (
        <div onChange={onChangeValue}>
            {filter.map(item => (
                <>
                    <input style={{marginTop:10}} type="radio" value={item} name={item} />{item}<br />
                </>
            ))}
        </div>

    )
}


const SortBy = () => {
    function onChangeValue(event) {
        console.log(event.target.value);
    }
    return (
        <>
            <p style={{ fontSize: 12, fontWeight: '600' }}>Sort By</p>
            <div onChange={onChangeValue}>
                <input type="radio" value="nearest" name="location" /> Nearest <br />
                <input type="radio" value="To-reated" name="location" /> Top Reated<br />
                <input type="radio" value="new" name="location" /> New
            </div>
        </>
    )
}

const OfferType = () => {
    function onChangeValue(event) {
        console.log(event.target.value);
    }
    return (
        <>
            <p style={{ fontSize: 12, fontWeight: '600' }}>Offer type</p>
            <div onChange={onChangeValue}>
                <input type="radio" value="nearest" name="location" /> By one get one free <br />
                <input type="radio" value="To-reated" name="location" /> Take away<br />
                <input type="radio" value="new" name="location" /> New <br />
                <input type="radio" value="To-reated" name="location" /> Online<br />
                <input type="radio" value="new" name="location" /> Delivery
            </div>

        </>
    )
}


const FoodAndDrinks = ({ setShowAll }) => {
    const [open, setOpen] = React.useState(false)
    function onChangeValue(event) {
        console.log(event.target.value);
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} onClick={() => setOpen(!open)}>
                <p style={{ fontSize: 12, fontWeight: '600' }}>Food & Drinks</p>
                <img src={open ? ArrowUp : ArrowDown} alt="" style={{ heiht: '10px', width: '10px' }} />
            </div>
            <hr class="solid" />

            {open &&
                <>
                    <p style={{ fontSize: 12, fontWeight: '600' }}>Food ype</p>

                    <div onChange={onChangeValue}>
                        <input type="radio" value="nearest" name="location" /> By one get one free <br />
                        <input type="radio" value="To-reated" name="location" /> Take away<br />
                        <input type="radio" value="new" name="location" /> New <br />
                        <input type="radio" value="To-reated" name="location" /> Online<br />
                        <input type="radio" value="new" name="location" /> Delivery
                    </div>
                    <p onClick={() => setShowAll(true)} style={{ marginTop: '5px', textDecoration: 'underline', color: 'blueviolet' }}>show all</p>
                </>
            }

        </>
    )
}
export default Filters;
