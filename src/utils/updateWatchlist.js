export function updateWatchlist(coin) {
    let arr = Array.isArray(JSON.parse(localStorage.getItem('watchlist'))) ? JSON.parse(localStorage.getItem('watchlist')) : [];

    let isInWatchlist = false;

    for (let i in arr) {
        if (coin.id === arr[i].id) {
            arr.splice(i, 1);
            isInWatchlist = true;
        }
    }
    
    if (!isInWatchlist) arr.push(coin);

    localStorage.setItem('watchlist', JSON.stringify(arr));
}