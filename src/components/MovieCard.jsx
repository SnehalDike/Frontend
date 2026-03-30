import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie, watchList, addToWatchList, removeFromWatchList }) {
    const navigate=useNavigate()
    function watchlistFlag(movieobj) {
        for (let item = 0; item < watchList.length; item++) {
            if (watchList[item].id == movieobj.id) {
                //console.log("item",item.id,"movieobj",movieobj.id)
                return true;
            }
        }
        return false;
        //console.log(watchList)
    }
    return (
        <div className="relative w-50 rounded-md overflow-hidden hover:scale-110 duration-300 hover:cursor-pointer" 
        onClick={() => navigate(`/trailer/${movie.id}`, { state: { movie } })}>
            <div className="relative h-[45vh] bg-center bg-cover "
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.poster_path})` }}>
                {/*<p className="text-white text-center">{movie.title}</p>*/}
            </div>
            <div className="relative h-[15vh] bg-gray-900 pt-2 ">
                <div className="flex flex-wrap gap-0.5 justify-evenly text-white">
                    <p><i class="fa-solid fa-star text-red-500" /> {Number(movie.vote_average.toFixed(1))}/10</p>
                    <p>{movie.vote_count} Votes</p>
                    <p></p>
                </div>
                <div className="flex justify-center mt-2">
                    
                    <button className="bg-gray-500 w-40 rounded text-white py-1 flex items-center justify-center gap-2" onClick={() =>
                            watchlistFlag(movie)
                                ? removeFromWatchList(movie)
                                : addToWatchList(movie)
                        }>
  <i className={`fa-solid ${watchlistFlag(movie) ? "fa-check" : "fa-plus"}`} />
  {watchlistFlag(movie) ? "In Watchlist" : "Add to Watchlist"}
</button>
                </div>
            </div>
        </div>
    )
}