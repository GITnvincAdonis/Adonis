import { Button } from "@/Npx-Shad-Components/components/button";
import { CImage, CVid } from "./CustomComponents/Cloudinary";
import { GitHubIcon, YoutubeIcon } from "@/SVGs/SVGS";
import Loader from "./CustomComponents/loader";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function UnityProjects() {
  const [loadedCount, setLoadedCount] = useState(0);

  const incrementLoadedCount = () => {
    console.log(loadedCount);
    setLoadedCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log(loadedCount);
  }, [loadedCount]);
  const unityItems = [
    {
      title: "3D PLATFORMER GAME",
      description:
        "A solo developed 3 dimensional game created using the 'built-in' render pipeline",
      showcase: (
        <CImage
          CloudinaryImageID="LevelSceenSHot_kebsyl"
          image_size={1000}
          loadFunc={incrementLoadedCount}
        ></CImage>
      ),
      buttons: [
        <a href="https://nvincadonis.itch.io/roboto">
          <Button>ITCH.IO Link</Button>
        </a>,
        <a href="https://github.com/GITnvincAdonis/Non-Urp-Platform">
          <Button variant={"secondary"} className="outline outline-1">
            Code repository <GitHubIcon size={20}></GitHubIcon>
          </Button>
        </a>,
        <a href="https://www.youtube.com/watch?v=pBj-lgULtWc">
          <Button variant={"secondary"} className="outline outline-1">
            Development LOG <YoutubeIcon size={20}></YoutubeIcon>
          </Button>
        </a>,
      ],
    },
    {
      title: "FRACTIONAL BROWNIAN MOTION SIMULATOR",
      description:
        "A side project developed through environment art research for 3d platformer",
      showcase: (
        <CVid
          loadFunc={incrementLoadedCount}
          CloudinaryVideoID="Recording_2024-09-16_141544_xattql"
        ></CVid>
      ),
      buttons: [
        <Button>
          {" "}
          <a href="https://github.com/GITnvincAdonis/WATERSURFACE-Sim">
            Code repository{" "}
          </a>
        </Button>,
      ],
    },
  ];
  return (
    <>
      <AnimatePresence>{loadedCount != 1 && <Loader></Loader>}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={loadedCount == 1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ type: "tween" }}
        className="  flex items-center justify-center"
      >
        <div className="lg:mt-[9rem] mt-[2rem] mb-[10em] flex flex-col justify-center items-center container space-y-4 p-6">
          <div className="lg:text-start text-center">
            <label
              htmlFor="terms"
              className="text font-medium leading-none peer-disabled:cursor-not-allowed opacity-70"
            >
              2022/2024
            </label>
            <h1 className="lg:text-4xl text-xl font-bold tracking-tight scroll-m-20 ">
              PROJECTS IN UNITY GAME ENGINE
            </h1>
          </div>

          {unityItems.map((item, index) => {
            return (
              <div
                key={index}
                className="  rounded-2xl  overflow-hidden flex lg:flex-row flex-col w-max border"
              >
                <div className="h-full lg:w-[25rem] w-[90vw] flex flex-col justify-center  p-8">
                  <div className="text-2xl font-bold ">{item.title}</div>
                  <div className="text-medium"> {item.description}</div>
                  <div className="flex flex-wrap  mt-2">
                    {item.buttons.map((i, index) => {
                      return (
                        <div key={index} className="me-2 mb-2">
                          {i}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="lg:w-[50rem] w-[90vw] border overflow-hidden ">
                  {item.showcase}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      {/* Overlay */}
    </>
  );
}
