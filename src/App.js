import {useState} from 'react'
import './App.css';

import SearchResults from './components/Results/SearchResults';
import AlertMsg from './components/Alert/AlertMsg'
import Navigation from './components/Nav/Navigation'
import Search from './components/Search/Search'

function App() {
 

  return (
    <main>
      <Navigation />
      <Search />
      
    </main>
  );
}

export default App;
