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
    // REMOVED: md:h-64 lg:h-60 xl:h-80
    <div
      className={
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 q"
      }
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200  flex flex-col h-full">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2  min-h-[50px] text-center flex-grow">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-4  min-h-[70px] flex-grow">
          {description}
        </div>
        <div className="h-64 md:h-48 lg:h-48 xl:h-48 relative w-full">
          <Image
            layout="fill"
            objectFit="cover"
            src={image}
            alt={imgAlt}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
