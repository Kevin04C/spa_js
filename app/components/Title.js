import api from "../helpers/wp_api.js";
export function title() {
  const h1 = document.createElement("h1");

  h1.innerHTML = `
  <a href="${api.DOMINAN}" target="_blank">${api.NAME.toUpperCase()}</a>
  `;
  return h1;
}
