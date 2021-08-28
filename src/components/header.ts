import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { urlForName } from '../router';

@customElement('app-header')
export class Header extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      header {
        background-color: var(--primary-color);
        display: flex;
        height: var(--header-height);
        top: 0;
      }
      header nav {
        display: flex;
        flex: 1;
        padding: 1vh 4.5vw;
        /* align-self: stretch; */
      }
      header nav a {
        align-items: center;
        display: flex;
        color: #fff;
        font-weight: 600;
        font-size: 1.25rem;
        text-decoration: none;
      }
      header nav a:not(:last-child) {
        margin-right: 1rem;
      }
      header nav a:hover {
        color: var(--accent-color);
      }
      h1 {
        font-family: 'Paytone One', sans-serif;
        align-self: center;
      }
      .scrolled {
        left: 0;
        position: fixed;
        top: 0;
        width: 100vw;
      }
      .hero-caption {
        color: white;
        bottom: 4.5%;
        font-size: 100px;
        left: 4.5%;
        position: absolute;
        text-align: center;
      }
    `,
  ];

  @property()
  heroImage: boolean = false;

  @property()
  heroTitle: string = "It's Lit";

  @property()
  imgAlt: string = 'sunset over the ocean';

  @property()
  imgHeight: number = 100;

  @property()
  imgPath: string = '/dist/images/sunset.jpg';

  heroImageTemplate(): undefined | TemplateResult {
    if (!this.heroImage) return undefined;

    const heroStyles = {
      backgroundColor: 'var(--primary-color)',
      backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.5)
        ), url(${this.imgPath})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: `${this.imgHeight}vh`,
      position: 'relative',
      width: '100vw',
    };

    return html`
      <div role="img" aria-label=${this.imgAlt} style=${styleMap(heroStyles)}>
        <h1 class="hero-caption">It's Lit</h1>
      </div>
    `;
  }

  render(): TemplateResult {
    return html`
      <header>
        <nav>
          <a href="${urlForName('home')}">Home</a>
          <a href="${urlForName('about')}">About</a>
          <a href="${urlForName('blog-list')}">Blog</a>
        </nav>
      </header>
      ${this.heroImageTemplate()},
    `;
  }
}
