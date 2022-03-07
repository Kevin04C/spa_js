import { loader } from "./app/components/Loader.js";
import { header } from "./app/components/Header.js";
import { Main } from "./app/components/Main.js";
import { Rutas } from "./app/components/Rutas.js";

export function App() {
  const root = document.getElementById("root");
  root.innerHTML = null;
  root.appendChild(header());
  root.appendChild(Main());
  root.appendChild(loader());
  Rutas();
}
