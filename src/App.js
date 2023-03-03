import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from 'components/Home';
import Country from 'components/Country';
import AllCountry from 'components/AllCountry';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allcountry' element={<AllCountry/>}/>
        <Route path='/allcountry/:id' element={<Country/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
