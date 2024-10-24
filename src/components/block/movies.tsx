"use client";

import React, { useEffect } from "react";
import Container from "@/components/block/container";
import { useInfiniteQuery } from "@tanstack/react-query";
import MovieList from "@/components/block/movie-list";
import { useInView } from "react-intersection-observer";
import { Loader } from "lucide-react";
import { API_KEY } from "@/constant";

const Movies = () => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageParam}`
      );
      return await response.json();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages?.length + 1;
      return nextPage <= lastPage?.total_pages ? nextPage : undefined;
    },
  });

  // combine results from all pages
  const movies = data?.pages.flatMap((page) => page.results) || [];

  // use inView to fetch next page
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <Container>
      <MovieList
        movies={movies}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
      />
      <div ref={ref} className="py-16">
        {isFetchingNextPage && (
          <div className="w-fit mx-auto py-4">
            <Loader size={16} className="animate-spin" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Movies;
