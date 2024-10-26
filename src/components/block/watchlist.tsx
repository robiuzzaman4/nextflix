"use client";

import { Movie } from "@/types";
import { getWatchlistedMovies } from "@/utils";
import React, { useEffect, useState } from "react";
import MovieCard from "@/components/block/movie-card";

const Watchlist = () => {
  const [watchlistedMovies, setWatchlistedMovies] = useState<Movie[]>([]);

  // get watchlisted movies
  useEffect(() => {
    const wishlists = getWatchlistedMovies();
    setWatchlistedMovies(wishlists);
  }, []);

  return (
    <section className="space-y-6">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tighter">
        Watchlist
      </h3>
      {watchlistedMovies?.length <= 0 && (
        <div className="w-fit mx-auto py-16">
          <h1 className="text-xl tracking-tighter">Your watchlist is empty!</h1>
        </div>
      )}

      {watchlistedMovies?.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {watchlistedMovies?.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              isShowWatchlistToggle={true}
              setWatchlistedMovies={setWatchlistedMovies}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Watchlist;
