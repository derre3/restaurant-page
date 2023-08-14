import Logo from "./img/logo.png";

export default function aboutComponent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  const logoImage = new Image();
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const paraContainer = document.createElement("div");
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  para1.textContent =
    "Temos como objetivo levar mais sabor para o seu café da manhã ou da tarde.";
  para2.textContent =
    "Nossos pães são artesanais, feitos sem conservantes, com produtos de qualidade prezando o sabor.";
  logoImage.src = Logo;
  logoImage.id = "logo-image";
  paraContainer.appendChild(para1);
  paraContainer.appendChild(para2);
  aboutContainer.appendChild(logoImage);
  aboutContainer.appendChild(paraContainer);
  mainContent.appendChild(aboutContainer);
  return mainContent;
}
