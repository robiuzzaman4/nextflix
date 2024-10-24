import { TMDB_MEDIA_URL } from "@/constant";
import { Movie } from "@/types";
import Image from "next/image";
import React from "react";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="grid gap-4 p-1 bg-background dark:bg-secondary/40 border rounded-lg shadow hover:shadow-lg max-h-96 overflow-hidden">
      {movie?.poster_path ? (
        <Image
          src={`${TMDB_MEDIA_URL}${movie?.poster_path}`}
          alt="Movie Poster"
          height={720}
          width={1080}
          className="aspect-[3/4] rounded-md h-full"
          loading="lazy"
        />
      ) : (
        <div className="bg-secondary rounded-md flex items-center justify-center text-xl h-full aspect-[3/4]">
          N/A
        </div>
      )}
      <h1 className="text-base truncate mt-auto">{movie?.title}</h1>
    </div>
  );
};

export default MovieCard;
