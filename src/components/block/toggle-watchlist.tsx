"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type ToggleWatchListProps = {
  movieId: number;
};

const ToggleWatchList = ({ movieId }: ToggleWatchListProps) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
      setIsInWatchlist(watchlist.includes(movieId));
    }
  }, [movieId]);

  const handleToggleWatchlist = () => {
    if (typeof window !== "undefined") {
      let watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");

      if (watchlist.includes(movieId)) {
        watchlist = watchlist.filter((id: number) => id !== movieId);
      } else {
        watchlist.push(movieId);
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
