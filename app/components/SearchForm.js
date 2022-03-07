export function searchForm() {
  const form = document.createElement("form");
  const input = document.createElement("input");

  form.classList.add("form-search");
  input.type = "search";
  input.name = "search";
  input.placeholder = "Buscar...";

  form.appendChild(input);
  return form;
}
