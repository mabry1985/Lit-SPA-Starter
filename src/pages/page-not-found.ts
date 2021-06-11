import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { urlForName } from '../router.js';

@customElement('page-not-found')
class PageNotFound extends LitElement {
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
        <h1>Page not found, Fool!</h1>

        <p>
          <a href="${urlForName('home')}">Back to home</a>
        </p>
      </section>
    `;
  }
}

export default PageNotFound;
