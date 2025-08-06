
import { createRoot } from 'react-dom/client'
import App from "./App";
import './index.css'

// Remove dark mode class addition
createRoot(document.getElementById("root")!).render(<App />);
