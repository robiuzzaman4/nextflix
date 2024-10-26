import React from "react";
import Container from "@/components/block/container";

const Hero = () => {
  return (
    <Container className="py-20">
      <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-center">
        Watch your favorite movies on <span className="text-rose-500">Nextflix.</span>
      </h1>
    </Container>
  );
};

export default Hero;
