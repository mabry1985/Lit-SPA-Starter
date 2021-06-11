import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-home')
class PageHome extends LitElement {
  static styles = css`
    section {
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <section>
        <h1>Home</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

        <p>Here you can see <a href="/error">the not found page</a>.</p>
      </section>
    `;
  }
}

export default PageHome;
