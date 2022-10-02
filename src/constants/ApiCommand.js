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
//COINS SORT CATEGORIES
export const GLOBAL_API_COINS_SORT_CATEGORIES_LIST = (categ,sizePage,currentPage) =>{
    return `/coins/markets?vs_currency=usd&category=${categ}&order=market_cap_desc&per_page=${sizePage}&page=${currentPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
};


//for main data of one coins
export const GLOBAL_API_COIN_ONE_MAIN = id =>{
    return `/coins/${id}?tickers=false&sparkline=true`
}


//DEFI DATA
export const GLOBAL_API_DEFI = `/global/decentralized_finance_defi`;

//NFTS LIST
export const GLOBAL_API_NFTS_LIST_ALL = (sizePage,currentPage) =>{
    return `/nfts/list?order=h24_volume_native_desc&per_page=${sizePage}&page=${currentPage}`
};

//CATEGORIES LIST
export const GLOBAL_API_CATEGORIES_LIST_ALL = `/coins/categories`;
export const GLOBAL_API_CATEGORIES_LIST_IDS = `/coins/categories/list`;

//Top-7 trending coins
export const GLOBAL_API_TOP_7_COINS = `/search/trending`;

//exchanges
export const GLOBAL_API_EXCHANGES = (sizePage,currentPage) => `/exchanges?per_page=${sizePage}&page=${currentPage}`;
export const GLOBAL_API_EXCHANGES_LIST = `/exchanges/list`;
export const GLOBAL_API_EXCHANGES_ID_DATA = id => `/exchanges/${id}`;
export const GLOBAL_API_EXCHANGES_ID_TICKERS = id => `/exchanges/${id}/tickers`;
