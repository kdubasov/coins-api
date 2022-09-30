export const GLOBAL_API_URL= 'https://api.coingecko.com/api/v3';

//for global info
export const GLOBAL_API_GLOBAL_COMMAND = '/global';

//for search global
export const GLOBAL_API_SEARCH = (query) => {
    // console.log(query)
    return `/search?query=${query}`
}

// --- DATA COINS ---
//for paginate
export const GLOBAL_API_COIN_LIST_ALL = (sizePage,currentPage) =>{
    return `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${sizePage}&page=${currentPage}&price_change_percentage=1h%2C24h%2C7d&sparkline=true`
};
//for main data of one coins
export const GLOBAL_API_COIN_ONE_MAIN = id =>{
    return `/coins/${id}?tickers=false&sparkline=true`
}


//DEFI DATA
export const GLOBAL_API_DEFI = `/global/decentralized_finance_defi`;

//NFTS LIST
export const GLOBAL_API_NFTS_LIST_ALL = (sizePage,currentPage) =>{
    return `/nfts/list?order=h24_volume_native_asc&per_page=${sizePage}&page=${currentPage}`
};

//CATEGORIES LIST
export const GLOBAL_API_CATEGORIES_LIST_ALL = `/coins/categories`


//Top-7 trending coins
export const GLOBAL_API_TOP_7_COINS = `/search/trending`;
