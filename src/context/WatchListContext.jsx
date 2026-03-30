import { createContext, useState, useEffect } from "react";

const WatchListContext = createContext();

export default function WatchListWrapper({ children }) {
    const [watchList, setWatchList] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("movie") != null)
            setWatchList(JSON.parse(localStorage.getItem("movie")))
    }, [])
    function addToWatchList(wmovie) {
        let updatedList = [...watchList, wmovie];
        setWatchList(updatedList)
        localStorage.setItem('movie', JSON.stringify(updatedList));
    }
    function removeFromWatchList(wmovie) {
        let updatedList = watchList.filter((e) => e.id != wmovie.id);
        setWatchList(updatedList)
        localStorage.setItem('movie', JSON.stringify(updatedList));
    }
    return (<WatchListContext.Provider value={{watchList,setWatchList,addToWatchList,removeFromWatchList}}>
        {children}
    </WatchListContext.Provider>)
}

export {WatchListContext};