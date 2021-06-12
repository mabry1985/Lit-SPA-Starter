import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
// import image from '../images/pdx-skyline.jpg';

@customElement('hero-image')
export class HeroImage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .hero-image {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.3)
          ),
          url('/dist/images/sunset.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 50vh;
        position: relative;
        width: 100vw;
      }
    `,
  ];

  render() {
    return html`
      <div
        role="img"
        aria-label="sunset over the ocean"
        class="hero-image"
      ></div>
    `;
  }
}
