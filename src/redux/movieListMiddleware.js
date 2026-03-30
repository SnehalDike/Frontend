import axios from "axios";
import {setMovieList} from "./movieSlice"
export default function movieListMiddleware(pageNo)
{
    return async (dispatch)=>{
        try{
            let res= await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=f69e8a928b2182f8275a79d12dcd67fb&page=${pageNo}`)   
            let movieData = res.data.results;
            dispatch(setMovieList(movieData));
        }
        catch(error)
        {
            console.error("Unable to fetch movies", error.response?.data || error);
        }
    }
}