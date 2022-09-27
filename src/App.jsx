
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {render} from "react-dom";
import  {Home, About, Works, Contacts} from "../src/pages/Index"



function App() {

  const rootElement = document.getElementById("root");
  render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <Home /> } />
        <Route path="about" element= { <About /> } />
        <Route path="works" element= { <Works /> } />
        <Route path="Contacts" element= { <Contacts /> } />
      </Routes>
    </BrowserRouter>,
    rootElement
    
  );
}

export default App;
