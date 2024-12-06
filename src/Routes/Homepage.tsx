import { Button } from "@/Npx-Shad-Components/components/button";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  UnityIcon,
  YoutubeIcon,
} from "@/SVGs/SVGS";
import { TechCarousel } from "./CustomComponents/TechCarousel";
import { CarouselIcons } from "@/SVGs/SVGS";
import { Link, Outlet } from "react-router-dom";
import "@geist-ui/react";

import { CarouselHoverItem } from "./CustomComponents/CarouselTooltip";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
const MotionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.251,
      duration: 1,
      type: "tween",
      ease: "easeOut",
    },
  },
};
const CharacterStagger = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,

    transition: {
      staggerChildren: 0.031,
      duration: 0.4,
      type: "tween",
      ease: "circOut",
    },
  },
};

export default function Homepage() {
  return (
    <>
      <motion.div className="lg:h-screen  w-screen flex justify-center items-center ">
        <div className=" lg:w-[40%] w-[90vw] mt-[4rem] relative p-[2px]  rounded-[2rem] bg-gradient-to-br  from-primary via-background to-background  animate-gradient ">
          <div className="bg-background lg:pt-[4rem] lg:ps-[4rem] p-4 rounded-[2rem]">
            <div className="lg:flex flex-col lg:text-start text-center ">
              <h1 className="lg:text-4xl text-3xl font-bold   ">
                <StaggerWord string={"I'm Raveon Adonis"}></StaggerWord>
              </h1>
              <div className="flex lg:flex-row flex-col mb-6 lg:space-x-5">
                <div className="text-2xl ">
                  {" "}
                  <StaggerWord string={"fullstack developer"}></StaggerWord>
                </div>
                <motion.a
                  variants={MotionVariants}
                  initial={"hidden"}
                  animate={"visible"}
                  href="mailto:nvraveon@gmail.com"
                >
                  <CarouselHoverItem
                    children={
                      <Button className="text-sm mt-1 lg:px-[5rem]">
                        {" "}
                        <StaggerWord string={"Get In Touch"}></StaggerWord>
                      </Button>
                    }
                    Intext={"nvraveon@gmail.com"}
                  ></CarouselHoverItem>
                </motion.a>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="font-sm lg:text-lg text-md"
              >
                FULLSTACK Web developer capable of creating applications with
                custom backends (database and API). With a keen eye for design,
                technical know how for developing apps and the design principles
                to support interfacing with my applications, i can make
                anything.
              </motion.p>
            </div>

            <motion.div
              variants={MotionVariants}
              initial={"hidden"}
              animate={"visible"}
              className="grid mt-[3rem] grid-cols-2"
            >
              <motion.div variants={MotionVariants}>
                <motion.h2
                  variants={MotionVariants}
                  className="text-xl font-light"
                >
                  PROJECTS
                </motion.h2>
                {projectContent.map((item, index) => {
                  return (
                    <>
                      <motion.div
                        variants={MotionVariants}
                        key={index}
                        className="my-3"
                      >
                        {item.content}
                      </motion.div>
                    </>
                  );
                })}
              </motion.div>
              <motion.div variants={MotionVariants}>
                <motion.h2
                  variants={MotionVariants}
                  className="text-xl font-light mb-3 "
                >
                  SOCIALS
                </motion.h2>
                {socialContent.map((item, index) => {
                  return (
                    <>
                      <motion.div
                        variants={MotionVariants}
                        key={index}
                        className="lg:mt-0 mt-4 "
                      >
                        {item.content}
                      </motion.div>
                    </>
                  );
                })}
              </motion.div>
            </motion.div>
            <div className=" w-full flex flex-col items-center lg:mt-[6rem] mt-3">
              {" "}
              <TechCarousel
                items={CarouselIcons}
                direction="forward"
              ></TechCarousel>
              <TechCarousel
                items={CarouselIcons}
                direction="backward"
              ></TechCarousel>
            </div>
            <div className="text-center">technologies ive worked with</div>
          </div>
        </div>
      </motion.div>{" "}
      <Outlet></Outlet>
    </>
  );
}
function StaggerWord(props: { string: String }) {
  const { string } = props;
  return (
    <>
      <motion.div
        variants={CharacterStagger}
        initial={"hidden"}
        animate={"visible"}
        className="flex lg:justify-start justify-center  overflow-hidden"
      >
        {string.split("").map((item) => {
          return (
            <motion.div variants={CharacterStagger}>
              {" "}
              {item === " " ? <>&nbsp;</> : item}
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
const projectContent = [
  {
    content: (
      <>
        <div className="leading-[0rem] ">
          <div className="font-medium">
            <Link to={"/Websites"}>
              <Button
                className="px-4 mb-2  outline-dashed outline-1 text-xl"
                variant="ghost"
              >
                <span>Websites</span>
                <SquareArrowOutUpRight></SquareArrowOutUpRight>
              </Button>
            </Link>
          </div>{" "}
          <br></br>
          <div className="text-sm leading-4 lg:max-w-[15rem] max-w-[10rem]">
            web applications build by myself
          </div>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <div className=" leading-[0rem] ">
          <div className="font-medium flex  m-0 items-center space-x-1">
            <Link to={"/UnityProjects"}>
              <Button
                className="px-4 mb-2  outline-dashed outline-1 text-xl "
                variant={"ghost"}
              >
                <span>Unity</span> <UnityIcon size={20}></UnityIcon>{" "}
                <SquareArrowOutUpRight></SquareArrowOutUpRight>
              </Button>
            </Link>
          </div>
          <br></br>
          <div className="text-sm leading-4 lg:max-w-[15rem] max-w-[10rem]">
            Game engine implementations of ideations and math concepts
          </div>
        </div>
      </>
    ),
  },
];

const socialContent = [
  {
    content: (
      <>
        <a href="https://www.youtube.com/@semi_jared39">
          <div className="flex items-center space-x-3">
            <YoutubeIcon size={35}></YoutubeIcon>
            <Button className="px-0" variant={"link"}>
              <div className="  text-wrap text-xs text-start lg:max-w-[15rem] max-w-[8rem]">
                Youtube - motion graphics renders, etc.
              </div>
              <SquareArrowOutUpRight></SquareArrowOutUpRight>
            </Button>
          </div>
        </a>
      </>
    ),
  },
  {
    content: (
      <>
        <a href="https://github.com/GITnvincAdonis">
          <div className="flex items-center space-x-3">
            <GitHubIcon size={35}></GitHubIcon>
            <Button className="px-0" variant={"link"}>
              <h3 className="text-wrap text-xs text-start lg:max-w-[15rem] max-w-[8rem]">
                GitHub - Commit history and projects
              </h3>
              <SquareArrowOutUpRight></SquareArrowOutUpRight>
            </Button>
          </div>
        </a>
      </>
    ),
  },
  {
    content: (
      <>
        <a href="https://www.linkedin.com/in/raveon-adonis-749305330/">
          <div className="flex items-center space-x-3">
            <LinkedInIcon size={35}></LinkedInIcon>
            <Button className="px-0" variant={"link"}>
              <h3 className="text-xs">LinkedIn</h3>
              <SquareArrowOutUpRight></SquareArrowOutUpRight>
            </Button>
          </div>
        </a>
      </>
    ),
  },
  {
    content: (
      <>
        <a href="https://www.instagram.com/nv.adonis/">
          <div className="flex items-center space-x-3">
            <InstagramIcon size={35}></InstagramIcon>
            <Button className="px-0" variant={"link"}>
              <h3 className="text-xs">Instagram</h3>
              <SquareArrowOutUpRight></SquareArrowOutUpRight>
            </Button>
          </div>
        </a>
      </>
    ),
  },
];
