import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ title: "title", description: "description", id: 1 }].map(
          ({ id, title, description }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
