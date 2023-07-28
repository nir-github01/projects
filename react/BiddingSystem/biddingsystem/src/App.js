import './App.css';
import * as React from 'react';
import { useClearCacheCtx } from 'react-clear-cache';
import RoutePage from './routes/RoutePage';



function App() {
  const { isLatestVersion, emptyCacheStorage } = useClearCacheCtx()
  return (
    <div className="App">
     <RoutePage />
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
