import Header from './components/heaader/header';
import {Routes ,Route} from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
