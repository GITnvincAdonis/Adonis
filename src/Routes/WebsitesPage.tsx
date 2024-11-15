import { Button } from "@/Npx-Shad-Components/components/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CImage } from "./CustomComponents/Cloudinary";
import { CircleArrowDown } from "lucide-react";
import Loader from "./CustomComponents/loader";
import "@geist-ui/react";
export default function WebsitesPage() {
  const [loadedCount, setLoadedCount] = useState(0);

  const incrementLoadedCount = () => {
    console.log(loadedCount);
    setLoadedCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log(loadedCount);
    console.log(Websites.length);
  }, [loadedCount]);
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={loadedCount === 3 ? { opacity: 0 } : { opacity: 1 }}
        transition={{ type: "tween" }}
      >
        <Loader></Loader>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={loadedCount == 3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ type: "tween" }}
        className="flex flex-col items-center space-y-6 justify-center py-[10rem]  "
      >
        <div>
          <h1 className="scroll-m-20 text-3xl text-center font-extrabold tracking-tight lg:text-4xl">
            WEBSITES IVE BUILT
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 p-4 gap-x-2 gap-y-4  lg:w-[70%] min-w-[80vw]  ">
          {Websites.map((item) => {
            const [isHovered, setHovered] = useState(false);
            return (
              <>
                <div className="shadow-lg border grid grid-cols-subgrid rounded-xl  lg:aspect-video">
                  <div
                    className="relative  rounded-xl inline-block  overflow-hidden
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
                        loadFunc={incrementLoadedCount}
                        classNames="w-full  rounded-lg   shadow-md"
                      ></CImage>
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={isHovered ? { opacity: 1 } : { opacity: 0.1 }}
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
                          <Button
                            className={"text-black"}
                            variant={"secondary"}
                          >
                            <p className="text-center tracking-tight scroll-m-20">
                              {item.title.replace(/[“”"']/g, "")}
                            </p>
                          </Button>
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="grid grid-col-2 p-3  ">
                    <h1 className="lg:text-xl font-bold tracking-tight scroll-m-20">
                      {" "}
                      {item.title.replace(/[“”"']/g, "")}
                    </h1>

                    <div className="grid grid-cols-2">
                      {item.checkBoxes.map((i) => {
                        return (
                          <>
                            <CheckBox header={i}></CheckBox>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </motion.div>

      <Outlet></Outlet>
    </>
  );
}
const Websites = [
  {
    title: "Chess Club Website",
    images: "Webone_wkaspy",
    siteLink: "https://chess-club-frontend-lime.vercel.app/#/",
    checkBoxes: [
      "Full Stack",
      "APIs built on express with CORS",
      "FrontEnd built on React and tailwind CSS",
      "PostgreSQL database solution",
    ],
  },
  {
    title: "Skincare brand Concept Ecommerce ",
    images: "Web2_e8vgu8",
    siteLink: "https://skincare-application.netlify.app/#/",
    checkBoxes: [
      "Full Stack",
      "Express js APIs",
      "React frontend",
      "URL persistent state for page sharing",
    ],
  },
  {
    title: "First Portfolio Website",
    images: "web3_ugzic6",
    siteLink: "https://gitnvincadonis.github.io/Raveon-Adonis/",
    checkBoxes: [
      "React and Framer-motion animation library driving all interactions",
    ],
  },
];
function CheckBox(props: { header: any }) {
  const { header } = props;
  return (
    <>
      {" "}
      <div className="flex items-center space-x-2 ">
        <div>
          <CircleArrowDown size={20}></CircleArrowDown>
        </div>
        <label
          htmlFor="terms"
          className="text font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {header}
        </label>
      </div>
    </>
  );
}
