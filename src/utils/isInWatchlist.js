export function isInWatchlist(id) {
    let inWatchlist = false;
    let arr = JSON.parse(localStorage.getItem('watchlist'))

    if (Array.isArray(arr)) {
        for (let i of arr) {
            if (i.id === id) {
                inWatchlist = true;
            }
        }
    }

    return inWatchlist;
}