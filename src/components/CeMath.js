import HyperHTMLElement from 'hyperhtml-element';
import wrapCustomElement from '@/utils/wrapCustomElement';

const name = 'ce-math';
const element = class CeMath extends HyperHTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  numberA = 1;

  numberB = 2;

  onNumberAInput() {
    return ({ target }) => {
      this.numberA = target.value;
      this.render();
    };
  }

  onNumberBInput() {
    return ({ target }) => {
      this.numberB = target.value;
      this.render();
    };
  }

  get sum() {
    return Number(this.numberA) + Number(this.numberB);
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    return this.html`
      <p>
        Hello, ${this.name}!
      </p>
      <input value=${this.numberA} oninput=${this.onNumberAInput()}>
      <input value=${this.numberB} oninput=${this.onNumberBInput()}>
      <pre>The sum is ${this.sum}</pre>

    `;
  }

  created() {
    this.render();
  }
};

export default wrapCustomElement({ name, element });
