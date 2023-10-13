import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import LobbyScreen from './screens/Lobby';
import RoomPage from './screens/Room';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route  path='/' element={<LobbyScreen />}/>
      <Route path='/room/:roomId' element={<RoomPage />} />
     </Routes>
    </div>
  );
}

export default App;
