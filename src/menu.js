import MenuOption1 from "./img/option1.png";
import MenuOption1_alt from "./img/option1-alt.png";
import MenuOption2 from "./img/option2.png";
import MenuOption2_alt from "./img/option2-alt.png";
import MenuOption3 from "./img/option3.png";
import MenuOption3_alt from "./img/option3-alt.png";
import MenuOption4 from "./img/option4.png";
import MenuOption4_alt from "./img/option4-alt.png";
import MenuOption5 from "./img/option5.png";
import MenuOption5_alt from "./img/option5-alt.png";

export default function menuComponent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  populateMenu(mainContent, 5);
  return mainContent;
}

function populateMenu(mainContent, itemAmount) {
  const option = [];
  const optionAlt = [];
  const optionSrc = [
    MenuOption1,
    MenuOption2,
    MenuOption3,
    MenuOption4,
    MenuOption5,
  ];
  const optionSrcAlt = [
    MenuOption1_alt,
    MenuOption2_alt,
    MenuOption3_alt,
    MenuOption4_alt,
    MenuOption5_alt,
  ];
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  mainContent.appendChild(menuContainer);

  for (let i = 0; i < itemAmount; i++) {
    option[i] = new Image();
    optionAlt[i] = new Image();
    option[i].src = optionSrc[i];
    optionAlt[i].src = optionSrcAlt[i];
    const optionContainer = document.createElement("div");
    menuContainer.appendChild(optionContainer);
    optionContainer.appendChild(option[i]);
    optionContainer.appendChild(optionAlt[i]);
    optionContainer.classList.add("option-container");
  }
}
