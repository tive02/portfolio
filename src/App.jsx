
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {render} from "react-dom";
import  {Home, About, Works, Contacts, Error404} from "../src/pages/Index"



function App() {

  const rootElement = document.getElementById("root");
  render (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element= { <Home /> } />
        <Route exact path="about" element= { <About /> } />
        <Route exact path="works" element= { <Works /> } />
        <Route exact path="Contacts" element= { <Contacts /> } />
        <Route path="*" element= { <Error404 /> } />
      
      </Routes>
    </BrowserRouter>,
    rootElement
    
  );
}

export default App;
