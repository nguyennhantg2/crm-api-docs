(function () {
  var DOCS = {
    api: { spec: './openapi/openapi.yaml', title: 'Pancake CRM API Docs' },
    webhook: { spec: './openapi/webhook.yaml', title: 'Pancake CRM Webhooks Docs' },
    internal_third_party: {
      spec: './openapi/internal_third_party.yaml',
      title: 'Pancake CRM Internal Third Party API Docs'
    }
  };
  var base = window.location.pathname.replace(/\/index\.html?$/i, '') || '/';
  var params = new URLSearchParams(window.location.search);
  var doc = Object.prototype.hasOwnProperty.call(DOCS, params.get('doc')) ? params.get('doc') : 'api';
  var specUrl = DOCS[doc].spec;
  document.title = DOCS[doc].title;
  Object.keys(DOCS).forEach(function (key) {
    var tab = document.getElementById('tab-' + key);
    if (!tab) return;
    tab.href = key === 'api' ? base : base + '?doc=' + key;
    if (key === doc) {
      tab.hidden = false;
      tab.classList.add('active');
    }
  });
  var el = document.createElement('elements-api');
  el.setAttribute('apiDescriptionUrl', specUrl);
  el.setAttribute('layout', 'sidebar');
  el.setAttribute('router', 'hash');
  document.getElementById('docs-root').appendChild(el);
})();
