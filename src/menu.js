export default function menuComponent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  para1.textContent = "Menu";
  para2.textContent = "Menu";
  mainContent.appendChild(para1);
  mainContent.appendChild(para2);

  return mainContent;
}
