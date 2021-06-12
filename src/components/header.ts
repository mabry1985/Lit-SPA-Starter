import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { urlForName } from '../router';

@customElement('app-header')
export class Header extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      header {
        display: flex;
        align-items: center;
        height: 53px;
        padding: 0 1rem;
        background-color: #24292e;
      }
      header nav {
        display: flex;
        flex: 1;
        align-self: stretch;
      }
      header nav a {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 600;
        text-decoration: none;
      }
      header nav a:not(:last-child) {
        margin-right: 1rem;
      }
      header nav a:hover {
        color: #bbb;
      }
    `,
  ];

  render() {
    return html` <header>
      <nav>
        <a href="${urlForName('home')}">Home</a>
        <a href="${urlForName('about')}">About</a>
        <a href="${urlForName('blog-list')}">Blog</a>
      </nav>
    </header>`;
  }
}
