import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = (query) => {
    const apiKey = '8eNBDBW8klPF7v93h0jvV7HSGyxTQHdv'; 
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <GifSearch onSubmit={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
