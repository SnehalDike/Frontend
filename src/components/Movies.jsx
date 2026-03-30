import {useEffect, useContext } from "react";
import Pagination from "./Pagination"
import MovieCard from "./MovieCard";
import { WatchListContext } from "../context/WatchListContext";
import { useDispatch, useSelector } from "react-redux";
import movieListMiddleware from "../redux/movieListMiddleware";

/*
API Read Access Token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjllOGE5MjhiMjE4MmY4Mjc1YTc5ZDEyZGNkNjdmYiIsIm5iZiI6MTc3MTI1NjEzOC4wMzIsInN1YiI6IjY5OTMzOTRhMTE0MzA5MDU0MzJhZjNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSl97WlaHjam1mBjSCIW-WHpJvkFMG8Hj2mDtTGG2AE

API Key
f69e8a928b2182f8275a79d12dcd67fb
*/
export default function Movies() {

    const movieList=useSelector((store)=>store.movieList)
    const pageNo=useSelector((state)=>state.pageNo.value);
    const {watchList,addToWatchList,removeFromWatchList}=useContext(WatchListContext)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(movieListMiddleware(pageNo))
    }, [pageNo,dispatch])
    
    return (
        <>
            <h2 className="text-center text-2xl">Trending Movies</h2>
            <div className="flex flex-wrap gap-8 my-4 justify-evenly">
                {
                    movieList.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} watchList={watchList} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} />
                        )
                    })
                }
            </div>
            <Pagination />
        </>
    )
}