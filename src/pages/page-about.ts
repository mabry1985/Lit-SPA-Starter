import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-about')
export class PageAbout extends LitElement {
  static styles = css`
    section {
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <section>
        <h1>About</h1>

        <p>
          Lorem ipsu m dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>
      </section>
    `;
  }
}
