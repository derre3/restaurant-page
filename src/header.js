import Logo from "./logo.png";

export default function headerComponent() {
  const header = document.createElement("header");
  const logoDiv = document.createElement("div");
  const logoImage = new Image();
  const logoText = document.createElement("p");
  logoText.textContent = "GS Pães";
  logoDiv.classList.add("logo");
  logoImage.src = Logo;
  logoDiv.appendChild(logoText);
  logoDiv.appendChild(logoImage);
  header.appendChild(logoDiv);

  const nav = document.createElement("nav");
  const about = document.createElement("li");
  const menu = document.createElement("li");
  const orders = document.createElement("li");
  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(orders);
  about.classList.add("about");
  about.textContent = "Sobre nós";
  menu.textContent = "Cardápio";
  menu.classList.add("menu");
  orders.textContent = "Pedidos";
  orders.classList.add("orders");
  header.appendChild(nav);

  return header;
}
