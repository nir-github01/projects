import './App.css';
import HomePage from './components/HomePage';
import {Routes, Route} from 'react-router-dom';
import * as React from 'react';
import { useClearCacheCtx } from 'react-clear-cache';



function App() {
  const { isLatestVersion, emptyCacheStorage } = useClearCacheCtx()
  return (
    <div className="App">
     <Routes>
         <Route exact path='/home' element={<HomePage />}/>
     </Routes>

    <HomePage />
    {!isLatestVersion && (
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              emptyCacheStorage();
            }}
          >
            Update version
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
