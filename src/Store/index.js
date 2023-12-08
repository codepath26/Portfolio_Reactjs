import { configureStore } from "@reduxjs/toolkit";
import gitProfileReducers from './github'

const store = configureStore({
  reducer : {
  gitProfile : gitProfileReducers,
  }
});

export default store;