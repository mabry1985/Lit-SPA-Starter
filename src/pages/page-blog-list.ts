import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { blogs } from '../mock-data/blogs-data';
import { router } from '../router';

export interface Blog {
  author: string;
  title: string;
  body: string;
}

@customElement('page-blog-list')
export class PageBlogList extends LitElement {
  @state() blogPosts: Blog[] = [...blogs];

  @property() location = router.location;

  static styles = [
    css`
      :host {
        display: block;
      }

      section {
        padding: 1rem;
      }
    `,
  ];

  /* eslint-disable */
  render() {
    return html`
      <section>
        <h1>Blog Posts</h1>
        <ul class="blog-list">
          ${this.blogPosts.map(
            (blog, index) =>
              html`
                <li>
                  <a href="blog/${index + 1}"> ${blog.title} </a>
                </li>
              `
          )}
        </ul>
      </section>
    `;
  }
}
