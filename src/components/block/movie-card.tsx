import { TMDB_MEDIA_URL } from "@/constant";
import { Movie } from "@/types";
import Image from "next/image";
import React from "react";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="grid gap-4 p-1 bg-background dark:bg-secondary/40 border rounded-lg shadow hover:shadow-lg">
      <Image
        src={`${TMDB_MEDIA_URL}${movie?.poster_path}`}
        alt={movie.title}
        height={720}
        width={1080}
        className="aspect-[3/4] rounded-md"
        priority
      />
      <h1 className="text-base truncate">{movie?.title}</h1>
    </div>
  );
};

export default MovieCard;
