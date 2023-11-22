import React, { useState } from 'react';

function GifSearch({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="query">Enter your search:</label>
      <input
        type="text"
        id="query"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
