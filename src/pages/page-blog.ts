import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { blogs } from '../data/blogs-data';
import { router, urlForName } from '../router';
import type { Blog } from './page-blog-list';

@customElement('page-blog')
export class PageBlog extends LitElement {
  @property() location = router.location;

  @state() blog!: Blog;

  static styles = [
    css`
      :host {
        display: block;
      }
      article,
      section {
        display: flex;
        flex-direction: column;
        padding: 1rem;
      }
      h1 {
        margin-bottom: 0.25rem;
      }
      .content {
        width: 70vw;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback()!;
    const slugParam = this.location.params.slug as string;
    [this.blog] = blogs.filter((blog: Blog) => blog.slug === slugParam);
    this.requestUpdate();
  }

  render() {
    return !this.blog
      ? html`
          <section>
            <h1>This Blog Doesn't Exist</h1>
            <a href=${urlForName('blog-list')}>Return to blog list</a>
          </section>
        `
      : html`
          <article>
            <h1>${this.blog.title}</h1>
            <p class="author">by ${this.blog.author}</p>
            <p class="content">${this.blog.body}</p>
            <a href=${urlForName('blog-list')}>Return to blog list</a>
          </article>
        `;
  }
}
