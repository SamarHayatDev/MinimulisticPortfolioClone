import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, description }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
