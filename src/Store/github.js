import { createSlice } from "@reduxjs/toolkit";

const initialProfile = {
  name : "parht",
}
const githubSlice = createSlice({
  name : "github-profile",
  initialState : initialProfile,
  reducers : {

  }
});


export const profileAction =  githubSlice.actions;
export default githubSlice.reducer; 