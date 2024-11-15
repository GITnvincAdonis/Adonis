import AutoScroll from "embla-carousel-auto-scroll";
import { Card } from "@/Npx-Shad-Components/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Npx-Shad-Components/components/carousel";
import { useRef } from "react";
import { CarouselHoverItem } from "./CarouselTooltip";

export function TechCarousel(props: {
  direction: "forward" | "backward";
  items: { icon: any }[];
}) {
  const { direction, items } = props;
  const emblaRef = useRef(
    AutoScroll({
      stopOnInteraction: false,
      speed: 0.21,
      direction: direction,
    })
  );

  return (
    <Carousel
      opts={{ loop: true, containScroll: "trimSnaps" }}
      plugins={[emblaRef.current]}
      className="container"
    >
      <CarouselContent className="-m2-1  ">
        {items.map((item, index) => (
          <CarouselHoverItem
            key={index}
            Intext={techTips[index].name}
            children={
              <CarouselItem key={index} className="pl-1 basis-1/ ">
                <div className="pb-1">
                  <Card className="rounded-sm flex items-center border">
                    <div className="text-2xl font-semibold text-center px-3 py-1">
                      {item.icon}
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            }
          ></CarouselHoverItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
const techTips = [
  { name: "Framer motion animation library" },
  { name: "CSS" },
  { name: "HTML" },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
  { name: "React JS" },
  { name: "Node JS" },

  { name: "Vercel" },
  { name: "Express JS" },

  { name: "PostgreSQL" },
  { name: "BootStrap" },
  { name: "Figma" },
  { name: "Unity" },
  { name: "C Sharp" },
  { name: "Adobe After Effects" },
  { name: "Blender" },
  { name: "Git" },
  { name: "Cloudinary SDK" },
  { name: "Shad/cn UI" },
];
