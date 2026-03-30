import React, { useEffect, useState } from "react";

const TMDB_API_KEY = "f69e8a928b2182f8275a79d12dcd67fb"; // Replace with your TMDb API key
const MOVIE_ID = 550; // Example: Fight Club

export default function MovieTrailer() {
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${TMDB_API_KEY}&language=en-US`
        );
        const data = await res.json();

        // Find the first YouTube trailer
        const trailer = data.results.find(
          (vid) => vid.site === "YouTube" && vid.type === "Trailer"
        );

        if (trailer) setVideoKey(trailer.key);
      } catch (err) {
        console.error("Failed to fetch video:", err);
      }
    }

    fetchVideo();
  }, []);

  if (!videoKey) return <p>Loading trailer...</p>;

  return (
    <div>
      <h2>Movie Trailer</h2>
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="Movie Trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}