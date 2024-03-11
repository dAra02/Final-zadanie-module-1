import { Component } from "../core/Component";
import { formatDate } from "../utils/date";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: formatDate(new Date()),
      amount: props.amount,
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";
    this.$rootElement.id = this.state.id;
    this.$rootElement.innerHTML = `${this.state.date} - <b>$${this.state.amount}</b>`;
  }
}
