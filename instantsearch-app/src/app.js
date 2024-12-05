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
  instantsearch.widgets.stats({
    container: '#stats',
  }),
  instantsearch.widgets.numericMenu({
    container: '#numeric-menu',
    attribute: 'sell',
    items: [
      { label: 'All' },
      { label: '>500', end: 500 },
      { label: '500 - 1000', start: 500, end: 1000 },
      { label: '>1000', start: 1000 },
    ],
  })
  ,
  instantsearch.widgets.hits({
    container: '#hits',
    cssClasses: {
      root: 'hit-div',
    },
    templates: {
      item: (hit, { html, components }) => html`
<article>
  <img src=${ hit.variations[0].image_url } alt=${ hit.name } />
  <div>
    <h1>${components.Highlight({hit, attribute: "name"})}</h1>
    <div class="row-div">
    <img src="https://res.cloudinary.com/daxddugwt/image/upload/v1733398645/eec9a7c7edb19fe3f0cba277d47055c4-removebg-preview_bj4swy.png" alt="Nooktools" class="price-img" /> 
   
    <p>${components.Highlight({hit, attribute: "sell"})}</p>
    </div>
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

