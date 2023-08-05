import './App.css';
import Dashboard from './modules/dashboard/Dashboard';

// import SignUpPage from './modules/signup/SignUpPage';


function App() {
  return (
    <div className="App bg-primary h-screen">
        <h3 className="text-lg font-bold underline">Real Time Chat App</h3>
         {/* <SignUpPage /> */}
         <Dashboard />
    </div>
  );
}

export default App;
