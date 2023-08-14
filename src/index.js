import "./style.css";
import Logo from "./img/logo.png";
import aboutComponent from "./about";
import menuComponent from "./menu";
import ordersComponent from "./orders";

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);
// append header to content
content.appendChild(headerComponent());
// append about to content
content.appendChild(menuComponent());
// append footer to content
content.appendChild(footerComponent());

changeContent();

function changeContent() {
  const footer = document.querySelector("footer");
  const about = document.querySelector(".about");
  const menu = document.querySelector(".menu");
  const orders = document.querySelector(".orders");

  about.addEventListener("click", () => {
    let mainContent = document.querySelector(".main-content");
    mainContent.remove();
    content.insertBefore(aboutComponent(), footer);
    mainContent = document.querySelector(".main-content");
    mainContent.scrollIntoView({ behavior: "smooth" });
  });

  menu.addEventListener("click", () => {
    let mainContent = document.querySelector(".main-content");
    mainContent.remove();
    content.insertBefore(menuComponent(), footer);
    mainContent = document.querySelector(".main-content");
    mainContent.scrollIntoView({ behavior: "smooth" });
  });

  orders.addEventListener("click", () => {
    let mainContent = document.querySelector(".main-content");
    mainContent.remove();
    content.insertBefore(ordersComponent(), footer);
    mainContent = document.querySelector(".main-content");
    mainContent.scrollIntoView({ behavior: "smooth" });
  });
}

function headerComponent() {
  const header = document.createElement("header");
  const logoDiv = document.createElement("div");
  const logoImage = new Image();
  logoDiv.classList.add("logo");
  logoImage.src = Logo;
  logoImage.alt = "GS Pães Logo";
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

function footerComponent() {
  const footer = document.createElement("footer");
  footer.textContent = "Footer";

  return footer;
}
