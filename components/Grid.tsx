import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="h-full w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
          relative">
            <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"
            />
      <BentoGrid className="w-full h-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
