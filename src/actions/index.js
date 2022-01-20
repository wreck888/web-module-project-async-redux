import axios from 'axios';


export const FETCH_ACTIVITY = "FETCH_ACTIVITY";
export const FETCH_ERROR = "FETCH_ERROR";



export const getActivity = () => (dispatch) => {
    axios.get('https://www.boredapi.com/api/activity')
        .then(resp => {
            // console.log(resp)
            dispatch(fetchActivity(resp.data));
        })
        .catch(err => {
            dispatch(fetchError(err));
        })
}


export const fetchActivity = (activity) => {
    return({type: FETCH_ACTIVITY, payload: activity});
}

export const fetchError = (errorMessage) => {
    return({type:FETCH_ERROR, payload: errorMessage})
}