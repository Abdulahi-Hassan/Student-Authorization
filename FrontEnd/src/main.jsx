import { createRoot } from "react-dom/client";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const container = document.querySelector("#root");
export let endpoint='https://student-authorization.onrender.com/api/'

const root = createRoot(container);
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
