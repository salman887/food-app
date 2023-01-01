import React from "react";


const HeaderOptions = () => {
    const arr = [
        { name: 'Trial Member', bg: '#686C6E' },
        { name: 'Purchase', bg: '#EA5457' }, 
        { name: 'Activate', bg: '#EA5457' },]
    return (
        <>
        <div style={{ display: 'flex', flexDireaction: 'row', height:'30px' }}>
            {arr.map(item => (
                <div style={{ width:'80px',textAlign:'center', backgroundColor:item.bg, margin:5, borderRadius:'10px'}}>
                    <p style={{fontWeight:'400',fontSize:'10px', lineHeight:'1px', color:'white' }}>{item.name}</p>
                </div>
            ))}
        </div>
        <p style={{color:'#686C6E'}}>Are you ready to start saving?</p>

        </>
    );
}

export default HeaderOptions;
