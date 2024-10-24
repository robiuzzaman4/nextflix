"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme("dark")}
          className="size-8"
        >
          <MoonIcon className="" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme("light")}
          className="size-8"
        >
          <SunIcon className="" />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
