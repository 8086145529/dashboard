
import './App.css';
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Home from './Components/Home'


function App() {
  return (
    <div className="grid-container">
      <Header/>
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
