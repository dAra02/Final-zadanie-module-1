import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      danates: [],
    };

    this.$rootElement = document.createElement("div");
    const h1 = document.createElement("h1");
    const span = document.createElement("span");

    h1.className = "total-amount";
    span.textContent = this.state.total;
    h1.textContent = "Итого: $";
    this.$rootElement.className = "app";

    this.$h1 = h1;
    this.$total = span;

    this.$h1.appendChild(this.$total);
    this.$rootElement.appendChild(this.$h1);

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    this.donateList = new List(this.donateList);
    this.$rootElement.appendChild(this.donateList.$rootElement);
  }
  onItemCreate(amount) {
    const item = new ListItem({ amount: amount });
    this.state.danates.push(item);
    this.donateList.addItem(item);
    this.state.total += amount;
    const span = document.querySelector("span");
    span.textContent = this.state.total;
    this.$total = span;
  }
}
