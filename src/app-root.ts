import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { attachRouter } from './router.js';
import './components/header.js';

@customElement('app-root')
class AppRoot extends LitElement {
  @query('main')
  // eslint-disable-line
  private main!: HTMLElement;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
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
      <app-header></app-header>
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

export default AppRoot;
