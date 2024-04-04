"use client";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  child1: React.ReactElement;
  child2: React.ReactElement;
};

function ToggleViewBtn({ child1, child2 }: Props) {
  const [view, toggle_view] = useState(false);

  return (
    <>
      <Button
        className="bg-red-800 text-purple-500"
        onClick={() => toggle_view(!view)}
      >
        {!view ? "Rows" : "Columns"}
      </Button>
      {view ? child1 : child2}
    </>
  );
}

export default ToggleViewBtn;
