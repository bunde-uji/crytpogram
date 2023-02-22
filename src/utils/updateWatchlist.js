import { useContext } from "react";
import { AppContext } from "../App";

export function updateWatchlist(coin, coins, fn, arg) {
    // const {coins} = useContext(AppContext);
    let arr = Array.isArray(JSON.parse(localStorage.getItem('watchlist'))) ? JSON.parse(localStorage.getItem('watchlist')) : [];

    let isInWatchlist = false;

    for (let i in arr) {
        if (coin.id === arr[i].id) {
            arr.splice(i, 1);
            isInWatchlist = true;
        }
    }
    
    if (!isInWatchlist) {
        arr.push(coins.filter(c => coin.name.toLowerCase() === c.name.toLowerCase())[0]);
        
    }
    // fn();
    
    localStorage.setItem('watchlist', JSON.stringify(arr));
    
}