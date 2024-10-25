import { Movie } from "@/types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "@/components/block/movie-card";

type MovieRecommendationsProps = {
  recommendations: Movie[];
};

const MovieRecommendations = ({
  recommendations,
}: MovieRecommendationsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tighter">
        Recommendations
      </h3>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {recommendations?.map((recommendation, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/3 sm:basis-1/5 lg:basis-1/6"
            >
              <MovieCard movie={recommendation} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MovieRecommendations;
