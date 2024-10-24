"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { API_KEY, TMDB_MEDIA_URL } from "@/constant";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MovieCast } from "@/types";

type MovieCastsProps = {
  movieId: number;
};

const MovieCasts = ({ movieId }: MovieCastsProps) => {
  const { data } = useQuery({
    queryKey: ["casts"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      return await response.json();
    },
  });
  const casts = data?.cast;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {casts?.map((cast: MovieCast, index: number) => (
        <div
          key={index}
          className="flex flex-col gap-2 items-center justify-center p-2 rounded-lg shadow border bg-background dark:bg-secondary/50"
        >
          <Avatar>
            <AvatarImage
              src={`${TMDB_MEDIA_URL}${cast?.profile_path}`}
              className="object-cover"
            />
            <AvatarFallback className="text-sm">N/A</AvatarFallback>
          </Avatar>
          <p className="text-sm truncate">{cast?.name ? cast?.name : "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCasts;
