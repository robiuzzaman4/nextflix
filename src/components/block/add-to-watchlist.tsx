import React from "react";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AddToWatchList = () => {
  return (
    <Button size="icon" variant="outline" className="h-8 w-8">
      <BookmarkFilledIcon className={cn("size-6 text-muted-foreground")} />
    </Button>
  );
};

export default AddToWatchList;
