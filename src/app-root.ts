import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { attachRouter, urlForName } from './router/index.js';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('main')
  private main!: HTMLElement;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
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
    main,
    main > * {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
    footer {
      padding: 1rem;
      text-align: center;
      background-color: #eee;
    }
    main:empty ~ footer {
      display: none;
    }
  `;

  render() {
    return html`
      <header>
        <nav>
          <a href="${urlForName('home')}">Home</a>
          <a href="${urlForName('about')}">About</a>
        </nav>
      </header>

      <!-- The main content is added / removed dynamically by the router -->
      <main role="main"></main>

      <footer>
        <span>Footer</span>
      </footer>
    `;
  }

  firstUpdated() {
    attachRouter(this.main);
  }
}
