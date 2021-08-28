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
      display: block;
    }
    main,
    main {
      /* background-color: #dbdbdb; */
      flex: 1;
      padding: 1rem;
      min-height: 100vh;
    }
    footer {
      background-color: var(--primary-color);
      color: white;
      font-weight: 300;
      padding: 1rem;
      text-align: end;
    }
  `;

  render() {
    return html`
      <app-header
        .sticky=${true}
        .imgHeight=${33}
        .heroImage=${true}
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
