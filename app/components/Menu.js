export function menu() {
  const menu = document.createElement("nav");

  menu.classList.add("menu");
  menu.innerHTML = `
    <a href="#/home">Home</a>
    <span> - </span>
    <a href="#/search">Busquedad</a>
    <span> - </span>
    <a href="https://aprendejavascript.org" target="_blank" rel="noopener">Aprende JS</a>
  `;
  return menu;
}
