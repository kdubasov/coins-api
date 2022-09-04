export const GLOBAL_API_URL= 'https://api.coingecko.com/api/v3';
export const GLOBAL_API_COIN_LIST_ALL_30D = (sizePage,currentPage) =>{
    return `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${sizePage}&page=${currentPage}&price_change_percentage=30d`
};
