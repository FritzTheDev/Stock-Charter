import { FETCH_TICKER_DATA } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_TICKER_DATA:
            return [action.payload.data, ...state]
        default:
            return state;
    }
}