import React from "react";
import Container from "@/components/block/container";
import MovieDetails from "@/components/block/movie-details";
import { getMovieDetails, getMovieRecommendations } from "@/utils";

const MovieDetailsPage = async ({ params }: { params: { id: number } }) => {
  // get movie details
  const movie = await getMovieDetails(params?.id);

  // get movie recommendations
  const recommendations = await getMovieRecommendations(movie?.id);

  // if movie not found then show error message
  if (movie?.success === false) {
    return (
      <div className="w-fit mx-auto py-16 text-xl font-medium tracking-tighter">
        Movie Not Found!
      </div>
    );
  }

  return (
    <section className="pb-16 pt-8">
      <Container>
        <MovieDetails movie={movie} recommendations={recommendations} />
      </Container>
    </section>
  );
};

export default MovieDetailsPage;
