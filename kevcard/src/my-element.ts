import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('kev-card')
export class KevCard extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  variant = 'primary';


  render() {
    return html`
      <div class="card">
        <h2> This is a ${this.variant} card.</h2>
        <slot name="header"></slot>
        <slot>Default content in the slot</slot>
        <slot name="footer"></slot>
      </div>
    `
  }



  static styles = css`
    h2 {
      color: #bada55;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': KevCard
  }
}
