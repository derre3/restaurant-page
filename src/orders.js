export default function ordersComponent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  const para1 = document.createElement("p");
  const instagramLink = document.createElement("a");
  para1.textContent = "Faça seu pedido acessando o ";
  instagramLink.textContent = "instagram GS Paẽs Artesanais";
  instagramLink.href = "https://www.instagram.com/gspaes/";
  instagramLink.id = "instagram-link";
  mainContent.appendChild(para1);
  para1.appendChild(instagramLink);

  return mainContent;
}
