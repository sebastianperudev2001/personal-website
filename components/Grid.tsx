import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="aboutme">
      <div className="py-20 w-full ">
        <h1 className="heading">
          About <span className="text-purple">me</span>
        </h1>
        <div className="mt-10 p-4 gap-16 "></div>
        <BentoGrid>
          {gridItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              image={item.img}
              imgAlt={item.imgAlt}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
