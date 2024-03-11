import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: "",
    };

    this.$rootElement = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const button = document.createElement("button");

    label.className = "donate-form__input-label";
    label.textContent = "Введите сумму в $";
    input.className = "donate-form__donate-input";
    input.name = "amount";
    input.max = "100";
    input.min = "1";
    input.required = true;
    button.className = "donate-form__submit-button";
    button.type = "submit";
    button.disabled = true;
    button.textContent = "Задонатить";

    this.$rootElement.className = "donate-form";

    this.$label = label;

    this.$input = input;
    this.$button = button;

    this.$label.appendChild(this.$input);
    this.$rootElement.appendChild(this.$label);
    this.$rootElement.appendChild(this.$button);

    this.$input.addEventListener("input", this.handleInput.bind(this));

    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  get isValid() {
    if (this.state.amount >= 1 && this.state.amount <= 100) {
      return true;
    } else {
      return false;
    }
  }

  handleInput(event) {
    this.state.amount = event.target.value;

    if (this.isValid === true) {
      this.$button.disabled = false;
    } else {
      this.$button.disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isValid === true) {
      this.props.onSubmit(Number(this.state.amount));
    }
    this.state.amount = "";
    this.$input.value = "";
  }
}
