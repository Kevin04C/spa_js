import { ajax } from "./app/helpers/ajax.js";
import api from "./app/helpers/wp_api.js";
import { loader } from "./app/components/Loader.js";
import { header } from "./app/components/Header.js";
import { Post } from "./app/components/Posts.js";
import { PostCard } from "./app/components/PostCard.js";

export function App() {
  const root = document.getElementById("root");
  root.appendChild(header());
  root.appendChild(Post());
  root.appendChild(loader());

  ajax({
    url: api.POSTS,
    cbSuccess: (post) => {
      console.log(post);
      let html = "";

      post.forEach((post) => (html += PostCard(post)));
      document.querySelector(".loader").style.display = "none";
      document.getElementById("posts").innerHTML = html;
    },
  });
}
