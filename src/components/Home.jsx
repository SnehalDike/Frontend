import Banner from "./Banner";
import Movies from "./Movies";
import WatchListWrapper from "../context/WatchListContext";

export default function Home()
{
    return(<>
    <Banner/>
    <WatchListWrapper>
    <Movies/>
    </WatchListWrapper>
    </>)
}