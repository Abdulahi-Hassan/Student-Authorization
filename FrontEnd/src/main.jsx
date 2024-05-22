import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import  {AllProvider}  from "./Dashboard/AllTable/api/AllProvider";
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
  <AllProvider>
    <App />
    
  </AllProvider>
  </BrowserRouter>
);
