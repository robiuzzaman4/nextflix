"use client";

import { Movie } from "@/types";
import { getWatchlistedMovies } from "@/utils";
import React, { useEffect, useState } from "react";

const Watchlist = () => {
  const [watchlistedMovies, setWatchlistedMovies] = useState<Movie[]>([]);

  // get watchlisted movies
  useEffect(() => {
    const wishlists = getWatchlistedMovies();
    setWatchlistedMovies(wishlists);
  }, []);

  return (
    <section className="space-y-0">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tighter">
        Watchlist
      </h3>
      {watchlistedMovies?.length <= 0 && (
        <div className="w-fit mx-auto py-16">
          <h1 className="text-xl tracking-tighter">Your watchlist is empty!</h1>
        </div>
      )}
    </section>
  );
};

export default Watchlist;
