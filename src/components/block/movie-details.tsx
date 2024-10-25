import React from "react";
import Image from "next/image";
import { API_KEY, TMDB_MEDIA_URL } from "@/constant";
import { Movie } from "@/types";
import { Badge } from "@/components/ui/badge";
import MovieCasts from "./movie-casts";
import MovieRecommendations from "./movie-recommendations";

type MovieDetailsProps = {
  movie: Movie;
};

const MovieDetails = async ({ movie }: MovieDetailsProps) => {
  // fetch the movie recommendations with ISR
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie?.id}/recommendations?api_key=${API_KEY}`,
    {
      next: {
        revalidate: 60, // revalidate after every 60 seconds
      },
    }
  );
  const data = await response.json();
  const recommendations = data?.results;

  return (
    <div className="w-full grid gap-6">
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="">
          {movie?.poster_path ? (
            <Image
              src={`${TMDB_MEDIA_URL}${movie?.poster_path}`}
              alt="Movie Poster"
              height={720}
              width={1080}
              className="aspect-[3/4] rounded-md w-48 sm:w-full mx-auto sm:mx-0"
              loading="lazy"
            />
          ) : (
            <div className="bg-secondary rounded-md flex items-center justify-center text-xl h-full aspect-[3/4]">
              N/A
            </div>
          )}
        </div>
        <div className="sm:col-span-2 flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tighter">
            {movie?.title}
          </h3>
          <p className="text-base text-muted-foreground">
            <span className="text-foreground">Overview:</span> {movie?.overview}
          </p>
          <div className="text-base flex items-center gap-1">
            Genres:{" "}
            <span className="flex items-center gap-2">
              {movie?.genres?.map((item, index) => (
                <Badge
                  variant="outline"
                  key={index}
                  className="dark:bg-secondary"
                >
                  {item?.name}
                </Badge>
              ))}
            </span>
          </div>
          <p className="text-base text-muted-foreground">
            Released on{" "}
            <span className="text-foreground">{movie?.release_date}.</span>
          </p>
          <span className="text-base space-y-6">
            <p>Casts:</p>
            <MovieCasts movieId={movie?.id} />
          </span>
        </div>
      </div>
      {/* recommendations */}
      <MovieRecommendations recommendations={recommendations}/>
    </div>
  );
};

export default MovieDetails;
