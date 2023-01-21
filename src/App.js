import './App.css';
import {useState, useEffect, createContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CoinDetails from './pages/CoinDetails';
import Watchlist from './pages/Watchlist';
import { url } from './utils/url';


export const AppContext = createContext();

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [dark, setDark] = useState(false);

  useEffect(()=> {
    async function getCoins() {
      const response = await fetch(url)
      setIsLoading(true)
      const data = await response.json();
      setCoins(data);
      setIsLoading(false);
    } 

    getCoins();
  }, [])
  
  // console.log(coins);

  return (
      <AppContext.Provider value={{coins, setCoins, dark, setDark, isLoading}}>
        <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:id' element={<CoinDetails />} />
          <Route path='/watchlist' element={<Watchlist />} />
        </Routes>
      </>
      </AppContext.Provider>
  );
}

export default App;
