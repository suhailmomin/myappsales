import {BrowserRouter,Route, Routes} from "react-router-dom"
import {Home} from "./Component/Home"
import {Support} from "./Component/Support"
import {Nav} from "./Component/Nav"
import { CustomerList } from "./Component/CustomerList"
import "./Component/Common.css"

  function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Nav/> 
     <Routes>
      <Route path="/customer" element={<CustomerList/>}/>
     <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/help" element={<Support/>}/>
      <Route path="/support" element={<Support/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
