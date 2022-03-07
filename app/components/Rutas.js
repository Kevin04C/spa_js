import { ajax } from "../helpers/ajax.js";
import wp_api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

export async function Rutas() {
  let { hash } = location;
  console.log(hash);
  const main = document.getElementById("main");
  console.log(main);

  main.innerHTML = null;

  if (!hash || hash === "#/home") {
    await ajax({
      url: wp_api.POSTS,
      cbSuccess: (post) => {
        console.log(post);
        let html = "";

        post.forEach((post) => (html += PostCard(post)));
        document.querySelector(".loader").style.display = "none";
        main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    main.innerHTML = `<h2>Sección del Buscador</h2>`;
  } else if (hash === "#/contacto") {
    main.innerHTML = `<h2>Sección de Contacto</h2>`;
  } else {
    main.innerHTML = `<h2>Aquí cargara el contenido del posts previamente selecionado</h2>`;
  }
  document.querySelector(".loader").style.display = "none";
}
