import React from 'react';
import './App.css';
import axios from 'axios';
import RickAndMorty from './components/RickAndMorty/RickAndMorty';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <RickAndMorty/>
    </div>
  );
}

export default App;
