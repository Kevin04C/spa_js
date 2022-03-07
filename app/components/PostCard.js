export function PostCard(props) {
  let { date, title, slug, _embedded } = props;
  let dateFormat = new Date(date).toLocaleString();
  let urlPoster = _embedded["wp:featuredmedia"][0].source_url
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/favicon.png";

  return `
    <article class="post-card">
    <img src="${urlPoster}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${date}">${dateFormat.replace(",", " - ")}</time>
    <a href="#${slug}">Ver</a>
    </p>
    </article>
  `;
}
