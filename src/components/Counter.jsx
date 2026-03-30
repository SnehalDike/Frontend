import {useSelector, useDispatch} from "react-redux"
import { increament,decrement} from "../redux/counterSlice"
export default function Counter()
{
    const count=useSelector((state)=>state.pageNo.value);
    const dispatch=useDispatch();
    return(<>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={()=>dispatch(increament())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>)
}