import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('hero-image')
export class HeroImage extends LitElement {
  @property()
  bordered: boolean = false;

  @property()
  imgPath: string = '/dist/images/sunset.jpg';

  @property()
  ariaLabel: string = 'sunset over the ocean';

  static styles = [
    css`
      :host {
        display: block;
      }
      .hero-image {
        height: 50vh;
        position: relative;
        width: 100vw;
      }
      .bordered {
        border-bottom: 5vh solid var(--primary-color);
      }
    `,
  ];

  render() {
    const classes = {
      'hero-image': true,
      bordered: this.bordered,
    };
    const styles = {
      backgroundImage: this.imgPath
        ? `linear-gradient(
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.5)
      ), url(${this.imgPath})`
        : this.imgPath,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return html`
      <div
        role="img"
        aria-label=${this.ariaLabel}
        class="${classMap(classes)}"
        style=${styleMap(styles)}
      ></div>
    `;
  }
}
