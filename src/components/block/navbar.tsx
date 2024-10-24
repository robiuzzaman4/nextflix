import React from "react";
import Container from "@/components/block/container";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/50 backdrop-blur-xl border-b h-16 flex items-center">
      <Container className="flex items-center justify-between gap-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tighter text-rose-500"
        >
          Nextflix
        </Link>
        <Button asChild size="sm">
          <Link href="/watchlist">Watchlist</Link>
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;
