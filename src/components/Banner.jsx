import axios from "axios";
import { useEffect, useState } from "react";
export default function Banner() {
    const [bannerData, setBannerData] = useState(null);
    const [currentItem, setCurrentItem] = useState(0);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=f69e8a928b2182f8275a79d12dcd67fb')
            .then((res) => {
                let results = res.data.results;
                console.log(results)
                setBannerData(results)
            })
    }, [])
    useEffect(() => {
        let interval = setInterval(() => {
            nextBanner();
        }, 5000)
        return (() => clearInterval(interval))
    }, [])

    function nextBanner() {
        if (bannerData && currentItem === bannerData.length - 1) {
            setCurrentItem(0);
        } else {
            setCurrentItem((curr) => curr + 1);
        }
    }
    function previousBanner() {
        if (bannerData && currentItem === 0) {
            setCurrentItem(bannerData.length - 1);
        } else {
            setCurrentItem((curr) => curr - 1);
        }
    }
    function formatDate(date) {
        let dateObj = new Date(date)
        const day = dateObj.toLocaleDateString('en-GB', { weekday: 'long' });
        const dayNum = dateObj.getDate();
        const month = dateObj.toLocaleDateString('en-GB', { month: 'long' });

        return `${day}, ${dayNum} ${month}`;
    }
    return (
        <div className="relative h-[20vh] md:h-[70vh] bg-cover bg-center group"
            style={{ backgroundImage: bannerData?.length > 0 ? `url(https://image.tmdb.org/t/p/w1280/${bannerData[currentItem]?.backdrop_path})` : 'none' }}
        >
            <div className="text-white text-2xl md:text-4xl font-semibold text-center">Up Next</div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 
                  h-10 w-10 rounded-full bg-white/30 backdrop-blur-sm 
                  flex items-center justify-center 
                  opacity-0 group-hover:opacity-100 
                  transition duration-300 cursor-pointer hover:bg-white/60" onClick={previousBanner}>
                <i className="fa-solid fa-angle-left text-white"></i>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 
                  h-10 w-10 rounded-full bg-white/30 backdrop-blur-sm 
                  flex items-center justify-center 
                  opacity-0 group-hover:opacity-100 
                  transition duration-300 cursor-pointer hover:bg-white/60" onClick={nextBanner}>
                <i className="fa-solid fa-angle-right text-white"></i>
            </div>
            <div className="absolute bottom-4 w-full text-center px-4">
                <div className="text-white text-xl md:text-2xl font-semibold">
                    {bannerData?.length > 0 && bannerData[currentItem]?.title}
                </div>
                <div className="text-white text-sm md:text-sm font-semibold">
                    {bannerData?.length > 0 && formatDate(bannerData[currentItem]?.release_date)}
                </div>
            </div>
        </div>
    )
}