import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch';
import PropTypes from 'prop-types';
import './App.css'

function App() {
  const searchClient = algoliasearch('PSXPTKZ8HK', '5e5c6e77f9e915ee456df653c93f19d6');
  

  const Hit = ({ hit }) => (
    <div>
      <h2>{hit.name}</h2>
      <p>Price: {hit.sell}</p>
    </div>
  );
  
  Hit.propTypes = {
    hit: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      sell: PropTypes.number.isRequired,
    }).isRequired,
  };

  return (
    <>
   <InstantSearch searchClient={searchClient} indexName="instant_search">
      <text>hola</text>
      <SearchBox
          translations={{
            placeholder: "Busca productos...",
          }}
          className="search-box"
        />
    <Hits hitComponent={Hit} />
    </InstantSearch>
    </>
  )
}

export default App
