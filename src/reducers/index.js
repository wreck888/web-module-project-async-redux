import { FETCH_ACTIVITY, FETCH_ERROR } from "../actions";

const initialState = {
    activity: [],
    price: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACTIVITY:
            return {
                ...state,
                activity: action.payload,
                price: action.payload,
                isFetching: false
            }
        case FETCH_ERROR:
            return{
                ...state,
                activity: 'Your BoreDOM is too overwhelming',
                price: 'Your sanity',
                isFetching: false
            }
        default:
            return state;
        
    }
};