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
        font-size: 40px;
        text-align: center;
        color: var(--primary-color);
      }
    `,
  ];

  render() {
    return html` <h1><slot></slot></h1> `;
  }
}
