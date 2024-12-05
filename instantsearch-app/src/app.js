const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch('PSXPTKZ8HK', '5e5c6e77f9e915ee456df653c93f19d6');

const search = instantsearch({
  indexName: 'tools-1',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
  
});


search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
<article>
  <img src=${ hit.variations[0].image_url } alt=${ hit.name } />
  <div>
    <h1>${components.Highlight({hit, attribute: "name"})}</h1>
    <p>${components.Highlight({hit, attribute: "sell"})}</p>
    <p>${components.Highlight({hit, attribute: "availability.0.note"})}</p>
  </div>
</article>
`,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();

