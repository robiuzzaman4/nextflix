"use client";

import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import Container from "@/components/block/container";
import MovieList from "@/components/block/movie-list";
import { useInView } from "react-intersection-observer";
import { API_KEY } from "@/constant";
import { Input } from "../ui/input";
import useDebounce from "@/hooks/useDebounce";

const Movies = () => {
  const [search, setSearch] = useState("");
  const deboucedSearch = useDebounce(search);

  const {
    data,
    isLoading,
    isFetching,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", search],
    queryFn: async ({ pageParam }) => {
      if (search) {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${pageParam}&query=${deboucedSearch}`
        );
        return await response.json();
      } else {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageParam}`
        );
        return await response.json();
      }
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
      {/* searchbar */}
      <div className="w-full flex items-center justify-end pb-6">
        <Input
          type="text"
          placeholder="The wild robot"
          className="max-w-sm w-full ms-auto"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* movie list */}
      {movies && movies?.length > 0 ? (
        <>
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
        </>
      ) : (
        <>
          {(!isLoading || !isFetching) && (
            <div className="w-fit mx-auto py-6 text-xl font-medium tracking-tighter">
              Data Not Found!
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Movies;
