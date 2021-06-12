import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { urlForName } from '../router.js';
import '../components/page-title';

@customElement('page-not-found')
export class PageNotFound extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    section {
      padding: 1rem;
      text-align: center;
    }
  `;

  render() {
    return html`
      <section>
        <page-title>Page not found, Fool!</page-title>
        <p>
          <a href="${urlForName('home')}">Back to home</a>
        </p>
      </section>
    `;
  }
}
