import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { AppContext } from '../App';
import ScrollToTop from '../components/ScrollToTop';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

function CoinDetails() {
    const {id} = useParams();
    const {coins} = useContext(AppContext);
    const coin = coins.filter(c => c.id === id)[0];
    console.log(coin);

    return (  
        <div className='p-3'>
            <ScrollToTop />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img src={coin.image} alt="" className='h-10' />
                    <h1 className='text-3xl font-semibold mx-2'>{coin.name}</h1>
                    <span className='text-[12px] font-semibold py-1 px-2 rounded-sm bg-gray-300'>{coin.symbol.toUpperCase()}</span>
                </div>
                <div className='flex justify-center items-center'>
                    <h3 className='text-3xl font-semibold'>${coin.current_price.toLocaleString()}</h3>
                    <div className={`flex justify-center items-center rounded-md ml-3 px-2 py-1 ${coin.market_cap_change_percentage_24h < 0? 'bg-red-600' : 'bg-green-600'}`}>
                        {
                            coin.market_cap_change_percentage_24h < 0 ?
                            <FaCaretDown color='white' /> :
                            <FaCaretUp color='white' />
                        }
                        <span className='text-md font-semibold text-white'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</span>
                    </div>
                </div>
                
            </div>
            <div className='py-5'>
                <div className='flex justify-between p-3 rounded-sm bg-gray-100 w-1/4'>
                    <span className='font-bold'>Market cap</span>
                    <span>$20,300</span>
                </div>
            </div>
        </div>
    );
}

export default CoinDetails;