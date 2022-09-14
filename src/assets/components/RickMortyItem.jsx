import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RickMortyItem = ({url}) => {

    const [resident, setResident ] = useState({})
    useEffect(() => {
        axios.get(url)
        .then(res => setResident(res.data))
     }, [])
console.log(resident)
    return (
        <li className='resident-item'>
            <div className='resident-card'>
            {resident.name}
            <br />
            <img src={resident.image} alt="" />
            <br />
            {resident.status}
            <br />
            {resident.origin?.name}
            <br />
            {resident.episode?.length}
            </div>
            
        </li>
        
    );
};

export default RickMortyItem;