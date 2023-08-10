export default function ordersComponent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  para1.textContent = "Orders";
  para2.textContent = "Orders";
  mainContent.appendChild(para1);
  mainContent.appendChild(para2);

  return mainContent;
}
