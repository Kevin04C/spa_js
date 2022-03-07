const NAME = "malvestida";
const DOMINAN = `https://${NAME}.com`;
const SITE = `${DOMINAN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const POSTS = `${API_WP}/posts?_embed`;
const POST = `${API_WP}/posts`;
const CATEGORIES = `${API_WP}/categories`;
const SEARCH = `${POSTS}/search?_embed&search=`;

export default {
  NAME,
  DOMINAN,
  SITE,
  POSTS,
  POST,
  SEARCH,
  CATEGORIES,
};
