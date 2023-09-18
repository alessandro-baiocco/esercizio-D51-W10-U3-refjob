export const ADD_JOBS = "ADD_JOBS";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE = "REMOVE";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const GET_JOBS = "GET_JOBS";
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addJobs = (data) => ({ type: ADD_JOBS, payload: data });
export const addFavorites = (data) => ({ type: ADD_FAVORITES, payload: data });
export const removeJobs = (i) => ({ type: REMOVE, payload: i });
export const removeFavorites = (i) => ({ type: REMOVE_FAVORITES, payload: i });

export const getJobs = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
