import { Movie } from "@/types";
import React from "react";
import MovieCard from "@/components/block/movie-card";
import { Loader } from "lucide-react";

type MovieListProps = {
  movies: Movie[];
  isLoading: boolean;
  isFetching: boolean;
};

const MovieList = ({ movies, isLoading }: MovieListProps) => {
  return (
    <>
      {isLoading && (
        <div className="w-fit mx-auto py-4">
          <Loader size={16} className="animate-spin" />
        </div>
      )}
      <div className="py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
