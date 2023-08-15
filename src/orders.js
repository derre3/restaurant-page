import Logo from "./img/logo-info.png";

export default function aboutComponent() {
  const para = (text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  };

  const mainContent = document.createElement("div");
  const logoImage = new Image();
  const ctaHeader = document.createElement("h2");
  const paraContainer = document.createElement("div");
  const ordersContainer = document.createElement("div");
  const actionButton = document.createElement("button");
  const buttonContainer = document.createElement("div");

  ordersContainer.classList.add("orders-container");
  mainContent.classList.add("main-content");

  ctaHeader.textContent = "Faça o seu pedido pelo nosso instagram!";

  actionButton.textContent = "Eu quero pãozinho!";
  logoImage.src = Logo;

  paraContainer.appendChild(ctaHeader);
  paraContainer.appendChild(para("📍 Santo Amaro - SP"));
  paraContainer.appendChild(para("🍞 Pães artesanais produzidos com carinho"));
  paraContainer.appendChild(para("📦 Pedidos sob encomenda"));
  paraContainer.appendChild(para("🕐 Atendimento: 10h às 19h"));
  paraContainer.appendChild(para("📞 (11) 96953-2812 / (11) 94751-7899"));
  paraContainer.appendChild(actionButton);
  ordersContainer.appendChild(logoImage);
  ordersContainer.appendChild(paraContainer);
  ordersContainer.appendChild(buttonContainer);
  mainContent.appendChild(ordersContainer);

  actionButton.addEventListener("click", () => {
    window.open("https://www.instagram.com/gspaes/", "_blank");
  });

  return mainContent;
}
