import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
