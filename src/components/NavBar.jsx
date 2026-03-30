import { Link } from "react-router-dom";
import movie from "../assets/movie.png"

export default function NavBar(){
    return(
    <div className=" flex space-x-8 bg-gray-600  text-white items-center pl-3 px-4 h-12">
        <Link to="/"><i className="fa-solid fa-clapperboard fa-xl"/></Link>
        <Link to="/" className="">Home</Link>
        <Link to="/watchlist">WatchList</Link>
    </div>
    )
}

