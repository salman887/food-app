import React from "react";
import Bell from '../../images/headerBell.svg'
import Heart from '../../images/headerHeart.svg'
import Phone from '../../images/headerPhone.svg'
import Profile from '../../images/headerProfile.svg'
import Back from '../../images/backArrow.svg'
import Cancel from '../../images/cancel.svg'
import { useNavigate } from "react-router-dom";




const Header = ({showback, heading, phone, cancel, heart, profile, noti}) => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDireaction: 'row' , width:'100%'}}>
            <div style={{width: '70%', display:'flex', lineHeight: '30.49px', }}>
                {!showback ? 
            <h2 style={{ fontWeight: '400', fontSize: '21.82px',  }}>{!heading &&'Hello,'} </h2>
        :                 <img src={Back} style={{ width:'22px', marginRight:'8px'}} alt="logo" onClick={() => navigate(-1)} />    }

            <h2 style={{ fontWeight: 'bold', fontSize: '21.82px', }}>{heading ||'Salman Nasir'}</h2>
            </div>
            <div style={{ display: 'flex',alignItems:'center', justifyContent:'end', width:'30%' }}>
             
                {cancel ?
                <img src={Cancel} style={{ width:'22px',  marginRight:'8px'}} alt="logo"  onClick={() => navigate(-1)
                }/>:
                <>
                   {!phone && 
                <img src={Phone} style={{ width:'22px', marginRight:'8px'}} alt="logo" />
            }
                {!heart && <img src={Heart} style={{ width:'22px',  marginRight:'8px'}} alt="logo" />}
                {!profile &&<img src={Profile} style={{ width:'22px',  marginRight:'8px'}} alt="logo" />}
                {!noti && <img src={Bell} style={{ width:'22px',  marginRight:'8px'}} alt="logo" />}
                </>
            }

            </div>
        </div>
    );
}

export default Header;
