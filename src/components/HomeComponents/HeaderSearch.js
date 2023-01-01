import React from "react";
import Search from '../../images/Search.svg'
import Map from '../../images/map.svg'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css'; 


// import 

const options = [
    'Karachi', 'Lahore', 'Islamabad'
  ];
  const defaultOption = options[0];

const HeaderSearch = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDireaction: 'row', height: '20px' , alignItems:'center', padding:'0px 10px'}}>
                <div style={{ width: '70%', display:'flex',  }} >
                    <img src={Search} alt="" style={{ heiht: '20.5px', width: '20.5px' }} />
                    <input className="input" style={{ border: 'none', width:'100%' , paddingLeft:'15px', alignSelf:'center'}} placeholder="Search Restaurant, Cuisine" />

                </div>
                <div style={{ width: '30%', display:'flex' }} >
                <Dropdown  options={options} onChange={() => {}} value={defaultOption} placeholder="Select an option" />
                <img src={Map} alt="" style={{ heiht: '28.5px', width: '28.5px' }} />
                </div>
            </div>
            <hr class="solid" style={{margin:'10px 10px',}}/>
        </>
    );
}

export default HeaderSearch;
