import "./style.css";
import headerComponent from "./header.js";
import footerComponent from "./footer";
import aboutComponent from "./about";
import menuComponent from "./menu";
import ordersComponent from "./orders";

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);
// append header to content
content.appendChild(headerComponent());
// append about to content
content.appendChild(aboutComponent());
// append footer to content
content.appendChild(footerComponent());

function changeContent() {
  const footer = document.querySelector("footer");
  const about = document.querySelector(".about");
  const menu = document.querySelector(".menu");
  const orders = document.querySelector(".orders");

  about.addEventListener("click", () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.replaceChildren(content.insertBefore(aboutComponent(), footer));
    mainContent.scrollIntoView({ behavior: "smooth" });
    console.log(mainContent);
  });

  menu.addEventListener("click", () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.replaceChildren(content.insertBefore(menuComponent(), footer));
    mainContent.scrollIntoView({ behavior: "smooth" });
    console.log(mainContent);
  });

  orders.addEventListener("click", () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.replaceChildren(
      content.insertBefore(ordersComponent(), footer)
    );
    mainContent.scrollIntoView({ behavior: "smooth" });
    console.log(mainContent);
  });
}

changeContent();
