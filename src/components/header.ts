import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { urlForName } from '../router';
import './hero-image';

@customElement('app-header')
export class Header extends LitElement {
  @property()
  sticky: boolean = false;

  @property()
  heroImage: boolean = false;

  @property({ reflect: true })
  scrolled: boolean = false;

  static styles = [
    css`
      :host {
        display: block;
      }
      .scrolled {
        position: fixed;
        width: 100vw;
        top: 0;
        left: 0;
      }

      header {
        background-color: var(--primary-color);
        top: 0;
        display: flex;
        height: var(--header-height);
      }

      header nav {
        display: flex;
        flex: 1;
        padding: 1vh 4.5vw;
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

  firstUpdated() {
    if (this.sticky) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  disconnectedCallback() {
    if (this.sticky) {
      window.removeEventListener('scroll', this.handleScroll);
    }
    super.disconnectedCallback!();
  }

  render() {
    const classes = { scrolled: this.scrolled };
    return [
      this.heroImageTemplate(),
      html`
        <header class=${classMap(classes)}>
          <nav>
            <a href="${urlForName('home')}">Home</a>
            <a href="${urlForName('about')}">About</a>
            <a href="${urlForName('blog-list')}">Blog</a>
          </nav>
        </header>
      `,
    ];
  }

  private handleScroll = () => {
    const offset = window.scrollY;
    const vh = window.innerHeight;
    if (offset > vh * 0.5) {
      this.setScrolled(true);
    } else {
      this.setScrolled(false);
    }
  };

  setScrolled(bool: boolean) {
    this.scrolled = bool;
  }
}
