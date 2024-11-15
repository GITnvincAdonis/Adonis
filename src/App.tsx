import "./App.css";
import Homepage from "./Routes/Homepage";
import { Route, Routes } from "react-router-dom";
import WebsitesPage from "./Routes/WebsitesPage";

function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/">
          <Route path={"/"} element={<Homepage></Homepage>}></Route>
          <Route
            path="Websites"
            element={<WebsitesPage></WebsitesPage>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
