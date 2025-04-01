import { createRoot } from "react-dom/client";
import "./index.scss"
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element not found");
}