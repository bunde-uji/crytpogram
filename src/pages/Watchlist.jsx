import React, {useState, useContext, useEffect} from 'react';
import { AppContext } from '../App';
import Table from '../components/Table';
import Row from '../components/Row';
import { url } from '../utils/url';
import ScrollToTop from '../components/ScrollToTop';


function Watchlist() {
    const {coins, setCoins} = useContext(AppContext);
    // console.log('begin')

    // async function getCoins() {
    //     const response = await fetch(url)
    //     const data = await response.json();
    //     console.log('function running');
    //     console.log(data);
    //     setCoins(data);
    //   }

    // getCoins()

    // useEffect(()=> {
         
    
    //     getCoins();
    // })

    // console.log(coins)

    // function getWatchlistCoins() {
    //     const watchlist = JSON.parse(localStorage.getItem('watchlist'));
    //     const list = [];

    //     for (let i of coins) {
    //         if (watchlist.includes(i.id)) list.push(i);
    //     }

    //     return list
    // }
    
    // const [watchlistCoins, setWatchlistCoins] = useState(getWatchlistCoins());
    
    // if (coins) console.log(watchlistCoins);
    // if (coins.length) console.log(watchlistCoins[1].current_price);

    return (  
        <div className='p-3'>
            <ScrollToTop />

            <h2 className='text-black'>Watchlist</h2>

            <div>
            {coins &&
            <Table 
            rows={JSON.parse(localStorage.getItem('watchlist')).map(coin => {
                return (
                    <Row
                        id={coin.id}
                        key={coin.market_cap_rank} 
                        name={coin.name} 
                        price={coin.current_price.toLocaleString()} 
                        // serialNumber={coin.market_cap_rank} 
                        image={coin.image}
                        marketCap={coin.market_cap}
                        percentageChange={coin.price_change_percentage_24h}
                        circulatingSupply={coin.circulating_supply + ' ' + coin.symbol.toUpperCase()} 
                        totalVolume={coin.total_volume}
                    />
                )
            })} 
            />}
            </div>

            {/* <div>
                <Table 
                    rows={
                        <Row name='samcoin' /> 
                    }
                />
            </div> */}
        </div>
    );
}

export default Watchlist;
