import React from "react";
import Container from "@/components/block/container";
import Watchlist from "@/components/block/watchlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextflix - Watchlist",
  description: "Next.js movie application powered by TMDB",
};

const WatchlistPage = () => {
  return (
    <Container className="py-16">
      <Watchlist />
    </Container>
  );
};

export default WatchlistPage;
