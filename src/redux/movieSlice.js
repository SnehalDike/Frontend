import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movieList",
    initialState:[],
    reducers:{
        setMovieList:(state,action)=>{
            return action.payload;
        }
    }
})

export const {setMovieList}= movieSlice.actions;
export default movieSlice.reducer;