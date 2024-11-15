import { Button } from "@/Npx-Shad-Components/components/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CImage } from "./CustomComponents/Cloudinary";

export default function WebsitesPage() {
  return (
    <>
      <div className="flex flex-col items-center space-y-6 justify-center py-[15rem]  ">
        <div>
          <h1 className="text-3xl font-bold">Websites that Ive built</h1>
          <h2 className="text-center">Tagline Idk Yet</h2>
        </div>
        <div className="grid grid-cols-3 gap-3   w-[80%]">
          {Websites.map((item) => {
            const [isHovered, setHovered] = useState(false);
            return (
              <>
                <div
                  className="relative inline-block  aspect-video
                "
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 1.002 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CImage
                      CloudinaryImageID={item.images}
                      image_size={1000}
                      classNames="w-full h-auto  border rounded-lg border-2 border-dashed shadow-md"
                    ></CImage>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={isHovered ? { opacity: 0.6 } : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={
                        isHovered
                          ? { opacity: 1, y: "0%" }
                          : { opacity: 0, y: "20%" }
                      }
                      transition={{ type: "tween", duration: 0.2 }}
                    >
                      <a href={item.siteLink}>
                        <Button className={"text-black"} variant={"secondary"}>
                          <p className="text-center">
                            {item.title.replace(/[“”"']/g, "")}
                          </p>
                        </Button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
const Websites = [
  {
    title: "Chess Club Website",
    images: "Webone_wkaspy",
    siteLink: "https://chess-club-frontend-lime.vercel.app/#/",
  },
  {
    title: "Skincare brand Concept Ecommerce ",
    images: "Web2_e8vgu8",
    siteLink: "https://skincare-application.netlify.app/#/",
  },
  {
    title: "First Portfolio Website",
    images: "web3_ugzic6",
    siteLink: "https://gitnvincadonis.github.io/Raveon-Adonis/",
  },
];
