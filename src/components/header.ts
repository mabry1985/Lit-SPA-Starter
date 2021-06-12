import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { urlForName } from '../router';
import './hero-image';

@customElement('app-header')
export class Header extends LitElement {
  @property()
  sticky: boolean = false;

  @property()
  heroImage: boolean = false;

  static styles = [
    css`
      :host {
        display: block;
        background-color: var(--primary-color);
      }
      .sticky {
        width: 100vw;
        top: 0;
      }

      header nav {
        display: flex;
        flex: 1;
        /* align-self: stretch; */
      }
      header nav a {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        text-decoration: none;
      }
      header nav a:not(:last-child) {
        margin-right: 1rem;
      }
      header nav a:hover {
        color: var(--accent-color);
      }
      h2 {
        align-self: center;
      }
    `,
  ];

  heroImageTemplate() {
    return this.heroImage ? html` <hero-image></hero-image> ` : null;
  }

  render() {
    const headerStyles = {
      position: this.sticky ? 'fixed' : 'inherit',
      top: '0',
      display: 'flex',
      height: '80px',
      padding: '0 1rem',
    };
    return [
      this.heroImageTemplate(),
      html`
        <header style=${styleMap(headerStyles)}>
          <nav>
            <a href="${urlForName('home')}">Home</a>
            <a href="${urlForName('about')}">About</a>
            <a href="${urlForName('blog-list')}">Blog</a>
          </nav>
        </header>
      `,
    ];
  }
}
