
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Employee/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Employee"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Employee",
    "route": "/Employee/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 443, hash: 'd2cef1931907a78eb9a9ec6c746f59649929e38aeba0dac08519de4bd9b9fd41', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 956, hash: '303cc287a4bbb4f74af80ffd8301b4a50dcfe648e3ecdba26e4c6101d8aaa56b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4394, hash: 'c1b8c1b081d26d136c308c78f20b58ac55365dbe6e987ff3151646ad6b6bc3f7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
