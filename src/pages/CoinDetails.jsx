import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { AppContext } from '../App';
import ScrollToTop from '../components/ScrollToTop';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { updateWatchlist } from '../utils/updateWatchlist';


function CoinDetails() {
    const {id} = useParams();
    const {coins, dark} = useContext(AppContext);
    // const coin = coins.filter(c => c.id === id)[0];
    const [coin, setCoin] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const url = `https://api.coingecko.com/api/v3/coins/${id}`;

    useEffect(()=> {
        async function getCoin() {
          const response = await fetch(url)
          setIsLoading(true)
          const data = await response.json();
          setCoin(data);
          setIsLoading(false);
        } 
    
        getCoin();
      }, [id])

      console.log(coin);
      console.log(typeof coin?.market_data.market_cap_change_percentage_24h);

    return (  
        <div className={`p-3 ${dark ? 'bg-gray-800 text-slate-100' : ''} min-h-[88vh]  font-['Red_Rose']`}>
            {coin &&
            <div>
                <ScrollToTop />
                <div className='flex flex-col sm:flex-row justify-between items-start'>
                    <div className='mb-3 sm:mb-0 w-full sm:w-auto'>
                        <div className='flex items-center mb-2 justify-between w-full sm:w-auto'>
                            <div className='flex items-center mr-3'>
                                <img src={coin.image.large} alt="" className='h-10' />
                                <h1 className='text-3xl font-semibold mx-2'>{coin.name}</h1>
                                <span className='text-black text-[12px] font-semibold py-1 px-2 rounded-sm bg-gray-300'>{coin.symbol.toUpperCase()}</span>
                            </div>
                            <button className='border border-gray-400 p-1 rounded-md' onClick={() => updateWatchlist(coin, coins)}>
                                <FaRegStar/>
                            </button>
                        </div>
                        <p className='flex items-center text-[15px] font-semibold'>
                            <a className='mr-2' href={coin.links.homepage[0]} target='_blank'>
                                {coin.links.homepage[0].replace('https://', '').replace('/', '')}
                            </a>
                            <FaExternalLinkAlt />
                        </p>
                    </div>
                    <div className='flex justify-between sm:justify-center items-center w-full sm:w-auto'>
                        <h3 className='text-3xl font-semibold'>${coin.market_data.current_price.usd.toLocaleString()}</h3>
                        <div className={`flex justify-center items-center rounded-md ml-3 px-2 py-1 ${coin.market_data.market_cap_change_percentage_24h < 0? 'bg-red-600' : 'bg-green-600'}`}>
                            {
                                coin.market_data.market_cap_change_percentage_24h < 0 ?
                                <FaCaretDown color='white' /> :
                                <FaCaretUp color='white' />
                            }
                            <span className='text-md font-semibold text-white'>{coin.market_data.market_cap_change_percentage_24h.toFixed(2)}%</span>
                        </div>
                    </div>
                    
                    
                </div>
                <div className='py-3 my-5 flex flex-col sm:flex-row border-b border-t border-gray-400 font-semibold'>
                    <div className='px-2 sm:px-5 flex-1 mb-5 sm:mb-0'>
                        <div className='flex justify-between mb-3'>
                            <span>Market Cap</span>
                            <span>${coin.market_data.market_cap.usd.toLocaleString()}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Total Volume</span>
                            <span>${coin.market_data.total_volume.usd.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className='px-2 sm:px-5 flex-1 sm:border-l sm:border-r border-gray-400 mb-5 sm:mb-0'>
                        <div className='flex justify-between mb-3'>
                            <span>All-time High</span>
                            <span>${coin.market_data.ath.usd.toLocaleString()}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>All-time Low</span>
                            <span>${coin.market_data.atl.usd.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className='px-2 sm:px-5 flex-1 mb-5 sm:mb-0'>
                        <div className='flex justify-between mb-3'>
                            <span>Circulating Supply</span>
                            <span>
                                {coin.market_data.circulating_supply.toLocaleString()}
                                &nbsp; {coin.symbol.toUpperCase()}    
                            </span>
                        </div>
                        <div className='flex justify-between mb-3'>
                            <span>Total Supply</span>
                            <span>
                                {coin.market_data.total_supply.toLocaleString()}
                                &nbsp; {coin.symbol.toUpperCase()}    
                            </span>
                        </div>
                    </div>
                </div>

                <div className="font-['Red_Rose']">
                    <h2 className='mb-3 text-xl font-semibold'>What is {coin.name}?</h2>
                    <div dangerouslySetInnerHTML={{__html: coin.description.en}} className='text-lg' />
                </div>
            </div>
            }
        </div>
    );
}

export default CoinDetails;