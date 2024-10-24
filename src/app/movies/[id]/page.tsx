import Container from "@/components/block/container";
import MovieDetails from "@/components/block/movie-details";
import { Button } from "@/components/ui/button";
import { API_KEY } from "@/constant";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const MovieDetailsPage = async ({ params }: { params: { id: number } }) => {
  // fetch the movie details with ISR
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const movie = await response.json();

  // if movie not found then show error message
  if (movie?.success === false) {
    return (
      <div className="w-fit mx-auto py-16 text-xl font-medium tracking-tighter">
        Movie Not Found!
      </div>
    );
  }

  console.log("movie", movie);

  return (
    <section className="pb-16 pt-8">
      <Container>
        <Button asChild variant="outline" size="sm" className="mb-8">
          <Link href="/" className="w-fit">
            <ChevronLeft size={16} className="-ml-1 -mr-1" />
            Back to Home
          </Link>
        </Button>
        {/* details */}
        <MovieDetails movie={movie} />
      </Container>
    </section>
  );
};

export default MovieDetailsPage;
