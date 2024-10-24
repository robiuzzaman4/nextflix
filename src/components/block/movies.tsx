"use client";

import React from "react";
import Container from "@/components/block/container";
import { useQuery } from "@tanstack/react-query";

const Movies = () => {
  
  const response = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      return await response.json();
    },
  });

  console.log("movies", response?.data);
  
  return (
    <Container>
      <h1 className="text-2xl">Movies : {response?.data?.results?.length}</h1>
    </Container>
  );
};

export default Movies;
