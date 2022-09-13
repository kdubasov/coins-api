export const GLOBAL_API_URL= 'https://api.coingecko.com/api/v3';

export const GLOBAL_API_COIN_LIST_ALL = (sizePage,currentPage) =>{
    return `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${sizePage}&page=${currentPage}&price_change_percentage=1h%2C24h%2C7d`
};

export const GLOBAL_API_GLOBAL_COMMAND = '/global';

export const GLOBAL_API_SEARCH = (query) => {
    // console.log(query)
    return `/search?query=${query}`
}

