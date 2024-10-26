"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Movie } from "@/types";

type ToggleWatchListProps = {
  movieId: number;
  movie: Movie;
};

const ToggleWatchList = ({ movieId, movie }: ToggleWatchListProps) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const watchlist: Movie[] = JSON.parse(
        localStorage.getItem("watchlist") || "[]"
      );
      setIsInWatchlist(watchlist?.some((m) => m?.id === movieId));
    }
  }, [movieId]);

  const handleToggleWatchlist = () => {
    if (typeof window !== "undefined") {
      let watchlist: Movie[] = JSON.parse(
        localStorage.getItem("watchlist") || "[]"
      );

      if (watchlist?.some((m) => m?.id === movieId)) {
        watchlist = watchlist?.filter((m) => m?.id !== movieId);
      } else {
        watchlist.push(movie);
      }
      localStorage.setItem("watchlist", JSON.stringify(watchlist));

      setIsInWatchlist(!isInWatchlist);
    }
  };

  return (
    <>
      <Button
        onClick={handleToggleWatchlist}
        size="icon"
        variant="outline"
        className="h-8 w-8"
      >
        <BookmarkFilledIcon
          className={cn(
            "size-6",
            isInWatchlist ? "text-rose-500" : "text-muted-foreground"
          )}
        />
      </Button>
    </>
  );
};

export default ToggleWatchList;
