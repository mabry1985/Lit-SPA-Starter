import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-title')
export class PageTitle extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      h1 {
        color: var(--primary-color);
        font-size: var(--h1-font-size);
        text-align: center;
      }
    `,
  ];

  render() {
    return html` <h1><slot></slot></h1> `;
  }
}
