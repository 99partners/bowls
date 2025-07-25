import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ScrollProvider } from "./ScrollContext";

createRoot(document.getElementById("root")).render(
  <ScrollProvider>
    <App />
  </ScrollProvider>
);
