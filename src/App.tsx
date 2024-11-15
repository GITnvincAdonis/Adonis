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
  return (
    <div className="relative inline-block w-full">
      {/* Background Image */}
      {content}

      {/* Overlay */}
      <div className="fixed  bottom-0 flex w-full p-2 justify-end">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="p-7">
              CLICK ME <ChevronDownCircle></ChevronDownCircle>
            </Button>
          </PopoverTrigger>
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
