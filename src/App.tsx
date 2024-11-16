import "./App.css";
import Homepage from "./Routes/Homepage";
import { Link, Route, Routes } from "react-router-dom";
import WebsitesPage from "./Routes/WebsitesPage";
import UnityProjects from "./Routes/UnityProjects";
import { Button } from "./Npx-Shad-Components/components/button";
import { ChevronDownCircle, HomeIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CarouselHoverItem } from "./Routes/CustomComponents/CarouselTooltip";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function App() {
  return (
    <>
      {" "}
      <div className=" bottom-0 fixed w-full flex justify-end p-5  "></div>
      <Routes>
        <Route path="/">
          <Route
            path={"/"}
            element={
              <>
                <Overlay content={<Homepage></Homepage>}></Overlay>
              </>
            }
          ></Route>
          <Route
            path="Websites"
            element={
              <Overlay content={<WebsitesPage></WebsitesPage>}></Overlay>
            }
          ></Route>
          <Route
            path="UnityProjects"
            element={
              <>
                <Overlay content={<UnityProjects></UnityProjects>}></Overlay>
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export function Overlay(props: { content: any }) {
  const { content } = props;
  const [isOn, setToggle] = useState(false);
  const root = document.documentElement;

  useEffect(() => {
    if (isOn) root.classList.add("dark");
    if (!isOn) root.classList.remove("dark");
  }, [isOn]);
  return (
    <div className="relative inline-block w-full">
      {/* Background Image */}
      {content}

      {/* Overlay */}
      <div className="fixed  bottom-0 flex w-full p-2 justify-end">
        <Popover>
          <div className="flex flex-col items-end ">
            <PopoverTrigger asChild>
              <div className="space-y-3">
                <Button className="p-7">
                  CLICK ME <ChevronDownCircle></ChevronDownCircle>
                </Button>
              </div>
            </PopoverTrigger>{" "}
            <motion.div animate={{ scale: 2 }} className="my-5 origin-right">
              <Switch
                className="outline outline-1"
                onCheckedChange={(b) => {
                  setToggle(b);
                }}
              ></Switch>
            </motion.div>
          </div>
          <PopoverContent className="  w-[9rem] space-y-4">
            <a href="mailto:nvraveon@gmail.com">
              <CarouselHoverItem
                children={
                  <Button className="text-sm mt-1 "> Get In Touch</Button>
                }
                Intext={"nvraveon@gmail.com"}
              ></CarouselHoverItem>
            </a>

            <Button
              variant={"secondary"}
              className="outline outline-1 border w-full"
            >
              {" "}
              <Link to={"/"} className="flex items-center space-x-2">
                <div>home</div> <HomeIcon size={50}></HomeIcon>{" "}
              </Link>
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
