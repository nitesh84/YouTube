import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"searched",
    initialState:"",
    reducers:{
        searched:(state,action)=>{
            return action.payload;
        }
    }
})

export const {searched}=searchSlice.actions;
export default searchSlice.reducer;