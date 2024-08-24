import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { GridItems } from "@/data/Data";
import { Boxes } from "./ui/BackgroundBoxes";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="mt-3 mb-3">
        {GridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
