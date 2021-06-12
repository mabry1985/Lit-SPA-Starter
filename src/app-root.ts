import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { attachRouter } from './router.js';
import './components/header.js';
import './components/hero-image.js';

@customElement('app-root')
export class AppRoot extends LitElement {
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
      background-color: #f0f0f0;
      display: flex;
      flex: 1;
      flex-direction: column;
    }
    footer {
      background-color: var(--primary-color);
      color: white;
      font-weight: 200;
      padding: 1rem;
      text-align: end;
    }
    main:empty ~ footer {
      display: none;
    }
  `;

  render() {
    return html`
      <hero-image></hero-image>
      <app-header></app-header>
      <!-- The main content is added / removed dynamically by the router -->
      <main role="main"></main>

      <footer>
        <span>Built by Josh Mabry and Web Components</span>
      </footer>
    `;
  }

  firstUpdated() {
    attachRouter(this.main);
  }
}
