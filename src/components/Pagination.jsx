import { useDispatch, useSelector } from "react-redux";
import { priviousPage,nextPage } from "../redux/pageNumberSlice";
export default function Pagination()
{
    const pageNo=useSelector((state)=>state.pageNo.value);
    const dispatch=useDispatch();
    return(
    <div className="bg-gray-600 h-10 flex justify-center gap-2 items-center text-white">
        <div className="hover:scale-110 duration-300 hover:cursor-pointer" onClick={()=>dispatch(priviousPage())}><i class="fa-solid fa-arrow-left"></i> Previous</div>
        <p> Page {pageNo} </p>
        <div className="hover:scale-110 duration-300 hover:cursor-pointer" onClick={()=>dispatch(nextPage())}>Next <i class="fa-solid fa-arrow-right"></i></div>
    </div>
    )

}