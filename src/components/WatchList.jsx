import { useContext, useEffect, useState } from "react";
import genreids from "../constants";
import { WatchListContext } from "../context/WatchListContext";

const WatchList=()=>{
    const [searchInput,setSearchInput]=useState("");
    const {watchList,setWatchList}=useContext(WatchListContext);
    function handleDecendingSorting()
    {
        let decend=watchList.sort((a,b)=>a.vote_average-b.vote_average);
        setWatchList([...decend])
    }
    function handleAcendingSorting()
    {
        let decend=watchList.sort((a,b)=>b.vote_average-a.vote_average);
        setWatchList([...decend])
    }
    function handleSearchInputChange(e)
    {
        setSearchInput(e.target.value);
    }
    return(
    <>
    <div className="flex justify-center m-2">
        <input type="text" placeholder="Search movies" value={searchInput} onChange={handleSearchInputChange}
        className="w-40 h-8 bg-gray-200 px-4 outline-none border border-gray-200" 
        />
    </div>
    <div className="overflow-hidden rounded-lg border border-gray-300 shadow-md m-5 ">
        <table className="w-full bg-white text-left text-sm border-collapse">
            <thead className="px-2 py-2">
            <tr className="text-gray-900 bg-gray-100 font-medium">
                <th className="px-6 py-4">Name</th>
                <th>Title</th>
                <th className="pl-6 py-4">
                    <div className="flex">
                    <i className="fa-solid fa-arrow-up py-1 px-1 hover:cursor-pointer" onClick={handleDecendingSorting}></i>
                    Rating
                    <i className="fa-solid fa-arrow-down py-1 px-1 hover:cursor-pointer" onClick={handleAcendingSorting}></i>
                    </div>
                </th>
                <th className="pl-6 py-4">Genere</th>
                <th className="pl-2 py-4">Release Date</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
             {watchList
             .filter((fmovie)=>{
                return(fmovie.title.toLowerCase().includes(searchInput.toLowerCase()))
             })
             .map((movie)=>{
                return(<tr key={movie.id} className="hover:bg-gray-50">
                <td><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster"
                    className="h-24 w-40 object-fit"
                /></td>
                <td>{movie.title}</td>
                <td className="pl-6 py-4">{movie.vote_average}</td>
                <td className="pl-6 py-4">{genreids[movie.genre_ids[0]]}</td>
                <td className="pl-2 py-4">{movie.release_date}</td>
            </tr>)
             })}
             </tbody>
        </table>
    </div>
    </>
    )
}

export default WatchList;
