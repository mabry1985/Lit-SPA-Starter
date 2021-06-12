import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { blogs } from '../data/blogs-data';
import { router, urlForName } from '../router';

@customElement('page-blog')
export class PageBlog extends LitElement {
  @property() location = router.location;

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

  render() {
    const { id } = this.location.params;
    const blog = blogs[parseInt(id as string, 10) - 1];
    return !blog
      ? html`
          <section>
            <h1>This Blog Doesn't Exist</h1>
            <a href=${urlForName('blog-list')}>Return to blog list</a>
          </section>
        `
      : html`
          <article>
            <h1>${blog.title}</h1>
            <p class="author">by ${blog.author}</p>
            <p class="content">${blog.body}</p>
            <a href=${urlForName('blog-list')}>Return to blog list</a>
          </article>
        `;
  }
}
