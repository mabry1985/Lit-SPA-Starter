/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-babel',
    '@snowpack/plugin-dotenv',
    [
      '@canarise/snowpack-eslint-plugin',
      {
        globs: ['src/**/*.ts'], // You should provide this
        options: {
          /* any eslint options here */
        },
        formatter: 'stylish',
      },
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
      'snowpack-plugin-minify-html',
      {
        /**
         * @see Plugin Options below
         */
        htmlMinifierOptions: {
          sortAttributes: true,
          removeComments: true,
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
    treeshake: true,
    splitting: true,
  },
  packageOptions: {
    knownEntryOptions: ['@lit/reactive-element/decorators/base.js'],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
