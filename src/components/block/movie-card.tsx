"use client";

import React from "react";
import { TMDB_MEDIA_URL } from "@/constant";
import { Movie } from "@/types";
import Image from "next/image";
import ToggleWatchList from "@/components/block/toggle-watchlist";
import { useRouter } from "next/navigation";

type MovieCardProps = {
  movie: Movie;
  isShowWatchlistToggle?: boolean;
  setWatchlistedMovies?: React.Dispatch<React.SetStateAction<Movie[]>>;
};

const MovieCard = ({
  movie,
  isShowWatchlistToggle,
  setWatchlistedMovies,
}: MovieCardProps) => {
  const router = useRouter();
  const handleLinkClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event?.target as HTMLElement;
    if (target?.closest("button") || target?.closest("svg")) {
      event?.preventDefault();
      event?.stopPropagation();
    } else {
      router.push(`/movies/${movie?.id}`);
    }
  };

  return (
    <div
      className="grid gap-2 p-1 bg-background dark:bg-secondary/40 border rounded-lg shadow hover:shadow-lg max-h-96 overflow-hidden relative hover:cursor-pointer"
      onClick={handleLinkClick}
    >
      {movie?.poster_path ? (
        <Image
          src={`${TMDB_MEDIA_URL}${movie?.poster_path}`}
          alt="Movie Poster"
          height={720}
          width={1080}
          className="aspect-[3/4] rounded-md"
          loading="lazy"
        />
      ) : (
        <div className="bg-secondary rounded-md flex items-center justify-center text-xl h-full aspect-[3/4]">
          N/A
        </div>
      )}
      <h1 className="text-sm sm:text-base truncate mt-auto font-medium">
        {movie?.title}
      </h1>

      {/* watchlist toggle */}
      {isShowWatchlistToggle && (
        <div className="absolute top-2 right-2">
          <ToggleWatchList
            movie={movie}
            setWatchlistedMovies={setWatchlistedMovies}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
