export const GLOBAL_API_URL= 'https://api.coingecko.com/api/v3';
export const GLOBAL_API_COIN_LIST_ALL_30D = (sizePage,currentPage) =>{
    return `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${sizePage}&page=${currentPage}&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y`
};
