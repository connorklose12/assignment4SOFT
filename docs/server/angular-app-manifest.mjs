
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/assignment4SOFT/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/assignment4SOFT"
  },
  {
    "renderMode": 2,
    "route": "/assignment4SOFT/add"
  },
  {
    "renderMode": 2,
    "route": "/assignment4SOFT/expenses"
  },
  {
    "renderMode": 0,
    "route": "/assignment4SOFT/edit/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 664, hash: '26e3ab6f04dbe7e119de607d819e6aa4b1008941f4ceb15f413ab30c72c77b4b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1177, hash: 'cb330ef668a632824b95ad6aa28577109f14fb5f5d0de3519a8e81625680bbba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'add/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/add_index_html.mjs').then(m => m.default)},
    'index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
