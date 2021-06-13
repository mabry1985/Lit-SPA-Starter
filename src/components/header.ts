import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { urlForName } from '../router';

@customElement('app-header')
export class Header extends LitElement {
  @property()
  bordered: boolean = false;

  @property()
  heroImage: boolean = false;

  @property()
  imgAlt: string = 'sunset over the ocean';

  @property()
  imgHeight: number = 100;

  @property()
  imgPath: string = '/dist/images/sunset.jpg';

  @property({ reflect: true })
  scrolled: boolean = false;

  @property()
  sticky: boolean = false;

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
      h2 {
        align-self: center;
      }
      .scrolled {
        left: 0;
        position: fixed;
        top: 0;
        width: 100vw;
      }
      .bordered {
        border-bottom: 5vh solid var(--primary-color);
      }
    `,
  ];

  heroImageTemplate() {
    const classes = {
      bordered: this.bordered,
    };
    const styles = {
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
      <div
        role="img"
        aria-label=${this.imgAlt}
        class="${classMap(classes)}"
        style=${styleMap(styles)}
      ></div>
    `;
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
    const vh = window.innerHeight * (this.imgHeight * 0.01);
    if (offset > vh) {
      this.setScrolled(true);
    } else {
      this.setScrolled(false);
    }
  };

  setScrolled(bool: boolean) {
    this.scrolled = bool;
  }
}
