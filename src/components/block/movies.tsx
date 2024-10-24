"use client";

import React from "react";
import Container from "@/components/block/container";
import { useQuery } from "@tanstack/react-query";
import MovieList from "@/components/block/movie-list";

const Movies = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      return await response.json();
    },
  });
  const movies = data?.results;

  return (
    <Container>
      <h1 className="text-2xl">Movies : {data?.results?.length}</h1>

      <MovieList
        movies={movies}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </Container>
  );
};

export default Movies;
