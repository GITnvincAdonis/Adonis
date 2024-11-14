import { Button } from "@/Npx-Shad-Components/components/button";
import { GitHubIcon, LinkedInIcon, UnityIcon, YoutubeIcon } from "@/SVGs/SVGS";
import { TechCarousel } from "./CustomComponents/TechCarousel";
import { CarouselIcons } from "@/SVGs/SVGS";

export default function Homepage() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className=" w-[40%]">
          <h1 className="text-5xl  font-semibold">I'm Raveon Adonis</h1>

          <div className="flex mb-6 space-x-5">
            <div className="text-3xl ">fullstack developer</div>
            <Button className="text-sm mt-1 px-[5rem] rounded-3xl">
              {" "}
              Get In Touch
            </Button>
          </div>
          <p className="text-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            pariatur magnam corrupti dicta eaque tenetur ex distinctio
            veritatis, qui iste blanditiis ut maxime porro placeat voluptatum
            exercitationem odio harum consectetur.
          </p>
          <div className="grid mt-[3rem] grid-cols-2">
            <div className="">
              <h2 className="text-xl font-light">PROJECTS</h2>
              {projectContent.map((item) => {
                return (
                  <>
                    <div className="my-3">{item.content}</div>
                  </>
                );
              })}
            </div>
            <div className="">
              <h2 className="text-xl font-light mb-3 ">SOCIALS</h2>
              {socialContent.map((item) => {
                return (
                  <>
                    <div className=" ">{item.content}</div>
                  </>
                );
              })}
            </div>
          </div>
          <div className=" w-full flex flex-col items-center mt-[6rem]">
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
    </>
  );
}

const projectContent = [
  {
    content: (
      <>
        <div className="leading-[.1rem] ">
          <div className="font-medium">
            <Button className="p-0 text-xl" variant={"link"}>
              <span>Websites</span> <UnityIcon size={20}></UnityIcon>
            </Button>
          </div>{" "}
          <br></br>
          <span className="text-sm">web applications build by myself</span>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <div className=" leading-[.1rem] ">
          <div className="font-medium flex  m-0 items-center space-x-1">
            <Button className="p-0 text-xl " variant={"link"}>
              <span>Unity</span> <UnityIcon size={20}></UnityIcon>
            </Button>
          </div>
          <br></br>
          <div className="text-sm leading-4 max-w-[15rem]">
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
        <div className="flex items-center space-x-3">
          <YoutubeIcon size={35}></YoutubeIcon>
          <Button variant={"link"}>
            {" "}
            <h3 className="font-medium">Youtube - motions graphics, etc.</h3>
          </Button>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <div className="flex items-center space-x-3">
          <GitHubIcon size={35}></GitHubIcon>
          <Button variant={"link"}>
            {" "}
            <h3 className="font-medium">
              GitHub - Commit history and projects
            </h3>
          </Button>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <div className="flex items-center space-x-3">
          <LinkedInIcon size={35}></LinkedInIcon>
          <Button variant={"link"}>
            {" "}
            <h3 className="font-medium">LinkedIn</h3>
          </Button>
        </div>
      </>
    ),
  },
];
