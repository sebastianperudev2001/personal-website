import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  image,
  imgAlt,
}: {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image: string;
  imgAlt: string;
}) => {
  return (
    <div
      className={
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 q md:h-64 lg:h-60 xl:h-80"
      }
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-4">
          {description}
        </div>
        <Image
          width={500}
          height={400}
          src={image}
          alt={imgAlt}
          className="w-full h-32 md:h-40 lg:h-40 xl:h-48 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
