import { createSlice } from "@reduxjs/toolkit";

const pageNumberSlice=createSlice({
    name:"pageNo",
    initialState:{value:1},
    reducers:
    {
        priviousPage(state){
            if(state.value>1)
            state.value-=1
        },
        nextPage(state){
            state.value+=1
        }
    }

})

export const {priviousPage,nextPage}=pageNumberSlice.actions;
export default pageNumberSlice.reducer;