import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobsManagment from "../reducers/jobs";
import favManagment from "../reducers/favorite";
import listJob from "../reducers/listJobs";

const rootReducer = combineReducers({
  jobs: jobsManagment,
  favorites: favManagment,
  list: listJob,
});

const jobs = configureStore({
  //reducer
  reducer: rootReducer,
});

export default jobs;
