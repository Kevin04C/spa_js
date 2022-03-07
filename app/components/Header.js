import { menu } from "./Menu.js";
import { title } from "./Title.js";
import { searchForm } from "./SearchForm.js";

export function header() {
  const header = document.createElement("header");

  header.classList.add("header");
  header.appendChild(title());
  header.appendChild(menu());
  header.appendChild(searchForm());

  return header;
}
