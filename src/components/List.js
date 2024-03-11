import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    const h2 = document.createElement("h2");
    const div = document.createElement("div");

    h2.className = "donates-container__title";
    h2.textContent = "Список донатов";
    div.className = "donates-container__donates";

    this.$h2 = h2;
    this.$listContainer = div;

    this.$rootElement.className = "donates-container";

    this.$rootElement.appendChild(h2);
    this.$rootElement.appendChild(this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}
