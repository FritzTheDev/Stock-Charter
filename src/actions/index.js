import axios from 'axios';

const ROOT_URL = 'https://api.iextrading.com/1.0';

export const FETCH_TICKER_DATA = 'FETCH_TICKER_DATA';

export function fetchTickerData(ticker) {
    const url = `${ROOT_URL}/${ticker}/chart/1m`;
    const request = axios.get(url);

    return {
        type: FETCH_TICKER_DATA,
        payload: request
    };
}