import React, {useContext} from 'react';
import Table from '../components/Table';
import { AppContext } from '../App';
import Row from '../components/Row';
import ScrollToTop from '../components/ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isInWatchlist } from '../utils/isInWatchlist';


function Home() {
    const {coins, isLoading, dark} = useContext(AppContext);

    const notifyAdded = () => toast.success("Added to watchlist");
    const notifyRemoved = () => toast.error("Removed from watchlist");
    const notif = () => toast();

    console.log(isLoading);
    
    return (  
        <div className={`px-3 py-7 text-gray-800 ${dark ? 'bg-gray-800 text-white' : 'bg-white text-black'} min-h-[88vh] font-['Red_Rose']`}>
            <ScrollToTop />

            {/* <ToastContainer /> */}
            
            <h3 className={`text-xl font-semibold ${dark ? 'text-gray-200' : 'text-black'}`}>Cryptocurrency Prices by Market Cap</h3>
            {coins &&
            <Table 
            rows={coins.map(coin => {
                return (
                    <Row
                        coin={coin}
                        id={coin.id}
                        key={coins.indexOf(coin)} 
                        name={coin.name} 
                        price={coin.current_price.toLocaleString()} 
                        serialNumber={coin.market_cap_rank} 
                        image={coin.image}
                        marketCap={coin.market_cap}
                        percentageChange={coin.price_change_percentage_24h}
                        circulatingSupply={coin.circulating_supply + ' ' + coin.symbol.toUpperCase()} 
                        totalVolume={coin.total_volume}
                        fn={isInWatchlist(coin.id) ? notifyRemoved : notifyAdded}
                    />
                )
            })} 
            />}
            {isLoading && <p className={`text-lg font-semibold ${dark ? 'text-slate-100' : ''}`}>Loading...</p>}
        </div>
    );
}

export default Home;