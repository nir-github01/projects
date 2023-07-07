import './App.css';
import HomePage from './components/HomePage';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Routes>
         <Route exact path='/home' element={<HomePage />}/>
     </Routes>

    <HomePage />
    </div>
  );
}

export default App;
