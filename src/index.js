import "./style.css";
import Logo from "./img/logo.png";
import GitLogo from "./img/github-mark.svg";
import aboutComponent from "./about";
import menuComponent from "./menu";
import ordersComponent from "./orders";

const pageLoad = (() => {
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
  // append header to content
  content.appendChild(headerComponent());
  // append about to content
  content.appendChild(aboutComponent());
  // append footer to content
  content.appendChild(footerComponent());
  changeContent();
})();

function changeContent() {
  const footer = document.querySelector("footer");
  const navList = document.querySelectorAll("li");
  const content = document.querySelector("#content");

  navList.forEach((nav) => {
    nav.addEventListener("click", (e) => {
      let mainContent = document.querySelector(".main-content");
      // purge mainContent elements on click
      mainContent.remove();
      // gets ID from clicked element and execute function based on it
      if (e.target.id === "about") {
        content.insertBefore(aboutComponent(), footer);
      } else if (e.target.id === "menu") {
        content.insertBefore(menuComponent(), footer);
      } else content.insertBefore(ordersComponent(), footer);
      // assign the new value to mainContent so scroll function can target it
      mainContent = document.querySelector(".main-content");
      mainContent.scrollIntoView({ behavior: "smooth" });

      // loops array to remove any active class
      navList.forEach((nav) => {
        nav.classList.remove("list-active");
      });
      // then adds active class to clicked element
      e.target.classList = "list-active";
    });
  });
  // defaults to menu component on function call
  navList[1].click();
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
  about.id = "about";
  menu.id = "menu";
  orders.id = "orders";
  about.textContent = "Sobre nós";
  menu.textContent = "Cardápio";
  orders.textContent = "Pedidos";
  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(orders);
  header.appendChild(nav);

  return header;
}

function footerComponent() {
  const footer = document.createElement("footer");
  const text = document.createElement("span");
  const gitHubLogo = new Image();
  text.textContent = "Copyright © derre3";
  gitHubLogo.src = GitLogo;
  footer.appendChild(text);
  footer.appendChild(gitHubLogo);

  gitHubLogo.addEventListener("click", () => {
    window.open("https://github.com/derre3");
  });
  return footer;
}
