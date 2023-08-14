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

  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-container");
  tableContainer.appendChild(createTable(7));
  menuContainer.appendChild(tableContainer);

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

function createTable(rowAmount = 5) {
  const createRow = () => {
    const row = document.createElement("tr");
    return row;
  };

  const createData = (amount, type = "td") => {
    const row = createRow();
    for (let i = 0; i < amount; i++) {
      const data = document.createElement(type);
      row.appendChild(data);
    }
    return row;
  };

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const rowHeader = createData(3, "th");
  thead.appendChild(rowHeader);
  table.appendChild(thead);

  for (let i = 0; i < rowAmount; i++) {
    const row = createData(3);
    tbody.appendChild(row);
  }

  table.appendChild(tbody);

  // PLACEHOLDER, NEED TO MOVE THIS SOMEWHERE ELSE
  const header = thead.children[0].children;
  header[0].textContent = "Pão";
  header[1].textContent = "Mini";
  header[2].textContent = "Grande";

  const data = tbody.children;
  data[0].children[0].textContent = "Artesanal";
  data[0].children[1].textContent = "R$ 4,00";
  data[0].children[2].textContent = "R$ 25,00";

  data[1].children[0].textContent = "Calabresa";
  data[1].children[1].textContent = "R$ 6,00";
  data[1].children[2].textContent = "R$ 30,00";

  data[2].children[0].textContent = "Pizza";
  data[2].children[1].textContent = "R$ 6,00";
  data[2].children[2].textContent = "R$ 30,00";

  data[3].children[0].textContent = "Queijo";
  data[3].children[1].textContent = "R$ 6,00";
  data[3].children[2].textContent = "R$ 30,00";

  data[4].children[0].textContent = "Frango Cremoso";
  data[4].children[1].textContent = "R$ 6,00";
  data[4].children[2].textContent = "R$ 30,00";

  data[5].children[0].textContent = "Chocolate";
  data[5].children[1].textContent = "R$ 6,00";
  data[5].children[2].textContent = "R$ 30,00";

  data[6].children[0].textContent = "Frutas";
  data[6].children[1].textContent = "R$ 6,00";
  data[6].children[2].textContent = "R$ 30,00";
  // END OF PLACEHOLDER

  return table;
}
