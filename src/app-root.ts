import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { attachRouter } from './router.js';
import './components/header.js';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('main')
  private main!: HTMLElement;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 250vh;
      overflow-x: hidden;
    }
    main,
    main > * {
      background-color: #dbdbdb;
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 1rem;
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
    app-header[scrolled='true'] {
      padding-top: var(--header-height);
    }
  `;

  render() {
    return html`
      <app-header
        .heroImage=${true}
        .sticky=${true}
        .imgHeight=${100}
      ></app-header>
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

// app-header attr
// .imgPath=${'https://images.unsplash.com/photo-1547989453-11e67ffb3885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'}
