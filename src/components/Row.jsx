import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import {Link} from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { updateWatchlist } from '../utils/updateWatchlist';
import { isInWatchlist } from '../utils/isInWatchlist';


function Row(props) {
    const {dark} = useContext(AppContext)
    const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')));
    
    return (  
        <tr className={`hover ${dark ? 'bg-gray-900 text-white' : ''}`}>
            <th className='flex bg-inherit'>
                <span className='mr-3'>{props.serialNumber}</span>
                <button onClick={() => updateWatchlist(props.coin, props.fn)}>
                    {!isInWatchlist(props.id) ? <FaRegStar color={dark ? 'white' : 'black'} /> : <FaStar color='gold' />}
                </button>
                <Link to={`/coin/${props.id}`} className='flex items-center ml-3'>
                    <img src={props.image} alt="" className='h-4 inline mr-2' />
                    {props.name}
                </Link>
            </th>
            <td className='font-semibold bg-inherit'>${props.price}</td>
            <td className={`font-semibold bg-inherit ${props.percentageChange >= 0 ? 'text-green-600' : 'text-red-500'}`}><i className={`fa-solid ${props.percentageChange >= 0 ? 'fa-chevron-up' : 'fa-chevron-down'} mr-1`}></i>{props.percentageChange}%</td>
            <td className='font-semibold bg-inherit'>${props.marketCap.toLocaleString()}</td>
            <td className='font-semibold bg-inherit'>${props.totalVolume.toLocaleString()}</td>
            <td className='font-semibold bg-inherit'>{props.circulatingSupply}</td>
        </tr>
    );
}

export default Row;