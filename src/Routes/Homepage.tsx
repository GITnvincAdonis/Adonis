import { Button } from "@/Npx-Shad-Components/components/button";
import { GitHubIcon, LinkedInIcon, UnityIcon, YoutubeIcon } from "@/SVGs/SVGS";
import { TechCarousel } from "./CustomComponents/TechCarousel";
import { CarouselIcons } from "@/SVGs/SVGS";
import { Link, Outlet } from "react-router-dom";
import "@geist-ui/react";

import { CarouselHoverItem } from "./CustomComponents/CarouselTooltip";

export default function Homepage() {
  return (
    <>
      <div className="lg:h-screen  w-screen flex justify-center items-center">
        <div className=" lg:w-[40%] w-[90vw] mt-[4rem]">
          <div className="lg:flex flex-col lg:text-start text-center">
            <h1 className="lg:text-4xl text-3xl  font-bold">
              I'm Raveon Adonis
            </h1>
            <div className="flex lg:flex-row flex-col mb-6 lg:space-x-5">
              <div className="text-2xl ">fullstack developer</div>
              <a href="mailto:nvraveon@gmail.com">
                <CarouselHoverItem
                  children={
                    <Button className="text-sm mt-1 lg:px-[5rem]">
                      {" "}
                      Get In Touch
                    </Button>
                  }
                  Intext={"nvraveon@gmail.com"}
                ></CarouselHoverItem>
              </a>
            </div>
            <p className="font-medium lg:text-md text-sm">
              FULLSTACK Web developer capable of creating applications with
              custom backends (database and API). With a keen eye for design,
              technical know how for developing apps and the design principles to
              support interfacing with my applications, i can make anything.
            </p>
          </div>

          <div className="grid mt-[3rem] grid-cols-2">
            <div className="">
              <h2 className="text-xl font-light">PROJECTS</h2>
              {projectContent.map((item, index) => {
                return (
                  <>
                    <div key={index} className="my-3">
                      {item.content}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="">
              <h2 className="text-xl font-light mb-3 ">SOCIALS</h2>
              {socialContent.map((item, index) => {
                return (
                  <>
                    <div key={index} className="lg:mt-0 mt-4 ">
                      {item.content}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
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
      </div>{" "}
      <Outlet></Outlet>
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
              <Button className="p-0 text-xl" variant={"link"}>
                <span>Websites</span>
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
              <Button className="p-0 text-xl " variant={"link"}>
                <span>Unity</span> <UnityIcon size={20}></UnityIcon>
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
            </Button>
          </div>
        </a>
      </>
    ),
  },
];
