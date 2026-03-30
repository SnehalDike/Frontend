import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import pageNumberReducer from './pageNumberSlice';
import movieListReducer from './movieSlice';

const store=configureStore({
    reducer:{
        counter:counterReducer,
        pageNo:pageNumberReducer,
        movieList:movieListReducer
    }
})

export default store;